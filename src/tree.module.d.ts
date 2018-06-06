import { ModuleWithProviders, Type } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { INodeService } from './service/node.service';
export declare class TreeModule {
    private translate;
    static forRoot(nodeService: Type<INodeService>): ModuleWithProviders;
    static forFeature(nodeService: Type<INodeService>): ModuleWithProviders;
    constructor(translate: TranslateService);
    private setTranslationForPL();
    private setTranslationForEN();
}
