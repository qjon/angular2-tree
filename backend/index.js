var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var fs = require('fs');

var basePath = __dirname + '/data/';

var isDirectory = function (path) {
    try {
        var dir = fs.statSync(basePath + path);

        return dir && dir.isDirectory();
    } catch (e) {
        return false;
    }
};

app.use(bodyParser.json());

app.get('/folders', function (req, res) {
    var paths = [];
    var subdir = req.query.dirId || '';
    var items = fs.readdirSync(basePath + subdir);

    for (var i = 0; i < items.length; i++) {
        var name = items[i];
        var stat = fs.statSync(basePath + subdir + '/' + name);
        if (stat && stat.isDirectory()) {
            var dir = {
                id: subdir + '/' + name,
                name: name,
                children: []
            };

            paths.push(dir);
        }
    }

    res.json(paths);

});

app.put('/folders', function (req, res) {
    var folder = req.body;

    if (isDirectory(folder.id)) {
        var subdirs = folder.id.split('/');
        subdirs[subdirs.length - 1] = folder.name;
        var newDirName = subdirs.join('/');

        if (isDirectory(newDirName)) {
            res.sendStatus(403);
            res.json({msg: 'Directory already exists'});
        }
        else {
            fs.renameSync(basePath + folder.id, basePath + newDirName);

            if (isDirectory(newDirName)) {
                folder.id = newDirName;
                res.json(folder);
            } else {
                res.sendStatus(403);
                res.json({msg: 'Could not change directory name'});
            }
        }

    } else {
        res.sendStatus(403);
        res.json({msg: 'Directory does not exist'});
    }

});


app.post('/folders', function (req, res) {
    var data = req.body;
    var folder = data.node;
    var parentFolderId = data.parentNodeId;
    var newDirId = parentFolderId + '/' + folder.name;

    if (!isDirectory(newDirId)) {
        fs.mkdirSync(basePath + newDirId);

        if (isDirectory(newDirId)) {
            res.json({
                id: newDirId,
                name: folder.name,
                children: []
            });
        } else {
            res.sendStatus(403);
            res.json({msg: 'Directory has not been added'});
        }

    } else {
        res.sendStatus(403);
        res.json({msg: 'Directory exists'});
    }

});


app.delete('/folders', function (req, res) {
    var data = req.body;
    var folderId = data.dirId || null;

    if (isDirectory(folderId)) {
        fs.rmdirSync(basePath + folderId);
        res.json({
            success: !isDirectory(folderId)
        });
    } else {
        res.sendStatus(403);
        res.json({msg: 'Directory exists'});
    }

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

