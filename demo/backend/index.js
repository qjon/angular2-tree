var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var fs = require('fs');

var basePath = __dirname + '/data/';

var isDirectory = function (path) {
  try {
    var node = fs.statSync(basePath + path);

    return node && node.isDirectory();
  } catch (e) {
    return false;
  }
};

app.use(bodyParser.json());

app.get('/nodes', function (req, res) {
  var paths = [];
  var subNode = req.query.nodeId || '';
  var items = fs.readdirSync(basePath + subNode);

  for (var i = 0; i < items.length; i++) {
    var name = items[i];
    var stat = fs.statSync(basePath + subNode + '/' + name);
    if (stat && stat.isDirectory()) {
      var dir = {
        id: subNode + '/' + name,
        parentId: subNode || null,
        name: name,
        children: []
      };

      paths.push(dir);
    }
  }

  res.json(paths);

});

app.put('/nodes', function (req, res) {
  var node = req.body;

  if (isDirectory(node.id)) {
    var subNodes = node.id.split('/');
    subNodes[subNodes.length - 1] = node.name;
    var newNodeName = subNodes.join('/');

    if (isDirectory(newNodeName)) {
      res.sendStatus(403);
      res.json({msg: 'Directory already exists'});
    }
    else {
      fs.renameSync(basePath + node.id, basePath + newNodeName);

      if (isDirectory(newNodeName)) {
        node.id = newNodeName;
        res.json(node);
      } else {
        res.sendStatus(403);
        res.json({msg: 'Could not change node name'});
      }
    }

  } else {
    res.sendStatus(403);
    res.json({msg: 'Node does not exist'});
  }

});


app.put('/nodes/move', function (req, res) {
  var data = req.body;
  console.log(data);

  if (data.target === null) {
    data.target = '';
  }

  if (isDirectory(data.source) && isDirectory(data.target)) {
    var subNodes = data.source.split('/');
    var dirName = subNodes[subNodes.length - 1];
    var newNodeName = data.target + '/' + dirName;

    fs.renameSync(basePath + data.source, basePath + newNodeName);
    var dir = {
      id: newNodeName,
      name: dirName,
      parentId: data.target,
      children: []
    };

    res.json(dir);
  } else {
    res.sendStatus(403);
    res.json({msg: 'Node does not exist'});
  }

});


app.post('/nodes', function (req, res) {
  var data = req.body;
  var node = data.node;
  var parentFolderId = data.parentNodeId || '';
  var newNodeId = parentFolderId + '/' + node.name;

  if (!isDirectory(newNodeId)) {
    fs.mkdirSync(basePath + newNodeId);

    if (isDirectory(newNodeId)) {
      res.json({
        id: newNodeId,
        name: node.name,
        parentId: parentFolderId || null,
        children: []
      });
    } else {
      res.sendStatus(403);
      res.json({msg: 'Node has not been added'});
    }

  } else {
    res.sendStatus(403);
    res.json({msg: 'Node exists'});
  }

});


app.delete('/nodes', function (req, res) {
  var data = req.body;
  var nodeId = data.nodeId || null;

  if (isDirectory(nodeId)) {
    fs.rmdirSync(basePath + nodeId);
    res.json({
      success: !isDirectory(nodeId)
    });
  } else {
    res.sendStatus(403);
    res.json({msg: 'Directory exists'});
  }

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

