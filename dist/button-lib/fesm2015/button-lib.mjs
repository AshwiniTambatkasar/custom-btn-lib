import * as i0 from '@angular/core';
import { Component, Input, HostBinding, NgModule } from '@angular/core';

class ButtonLibComponent {
    get classes() {
        return `${this.style} ${this.size} ${this.shape} ${this.color} ${this.disabled ? 'disabled' : ''} ${this.effect ? this.effect : ''} `;
    }
}
ButtonLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0", ngImport: i0, type: ButtonLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0", type: ButtonLibComponent, selector: "lib-button-lib", inputs: { style: "style", size: "size", shape: "shape", color: "color", effect: "effect", disabled: "disabled" }, host: { properties: { "class": "this.classes" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host{box-sizing:border-box;display:inline-block;color:#fff;outline:0;border:0;cursor:pointer}:host.button-style-solid.button-color-default{background:#e4e4e4}:host.button-style-solid.button-color-default[disabled]{background:#e4e4e4;box-shadow:none;cursor:not-allowed;color:#a2a2a2}:host.button-style-solid.button-color-primary{background:#3f4fa0}:host.button-style-solid.button-color-primary[disabled]{background:#3f4fa0;box-shadow:none;cursor:not-allowed;color:#a2a2a2}:host.button-style-solid.button-color-primary.rest-effect{pointer-events:none}:host.button-style-solid.button-color-primary.hover-effect:hover:not([disabled]){background:#394892}:host.button-style-solid.button-color-primary.pressed-effect:active{background:#2d3872}:host.button-style-solid.button-color-secondary{background:#ecedf6}:host.button-style-solid.button-color-secondary[disabled]{background:#ecedf6;box-shadow:none;cursor:not-allowed;color:#a2a2a2}:host.button-style-solid.button-color-secondary.rest-effect{pointer-events:none}:host.button-style-solid.button-color-secondary.hover-effect:hover:not([disabled]){background:#d9dcec}:host.button-style-solid.button-color-secondary.pressed-effect:active{background:#c5cae3}:host.button-style-dotted.button-color-default{background:#e4e4e4;transition:background .3s,color .3s,border .3s}:host.button-style-dotted.button-color-default:focus{outline:2px dotted #1f1d5b;outline-offset:2px}:host.button-style-dotted.button-color-primary{background:#3f4fa0;transition:background .3s,color .3s,border .3s}:host.button-style-dotted.button-color-primary:focus{outline:2px dotted #1f1d5b;outline-offset:2px}:host.button-style-dotted.button-color-secondary{background:#ecedf6;transition:background .3s,color .3s,border .3s}:host.button-style-dotted.button-color-secondary:focus{outline:2px dotted #1f1d5b;outline-offset:2px}:host.button-size-medium,:host.button-size-large{font-size:16px;font-weight:700;line-height:30px;font-family:Manrope;font-style:normal;align-items:center}:host.button-size-medium{padding:8px 16px}:host.button-size-large{padding:8px 24px}:host.button-shape-rounded{border-radius:4px}:host.button-shape-pilled{border-radius:100px}:host.button-color-default:before{content:url(../../assets/16px/.Placeholder_icon-gray.png);position:relative;top:2px;margin-right:6px}:host.button-color-default{color:#a2a2a2}:host.button-color-default:disabled{cursor:not-allowed}:host.button-color-primary:before{content:url(../../assets/16px/.Placeholder_icon-white.png);position:relative;top:2px;margin-right:6px}:host.button-color-primary{color:#fff}:host.button-color-primary:disabled{cursor:not-allowed}:host.button-color-secondary:before{content:url(../../assets/16px/.Placeholder_icon-blue.png);position:relative;top:2px;margin-right:6px}:host.button-color-secondary{color:#3f4fa0}:host.button-color-secondary:disabled{cursor:not-allowed}:host.button-color-secondary.button-style-dotted:before{content:url(../../assets/16px/.Placeholder_icon-blue.png);position:relative;top:2px;margin-right:6px}:host.button-color-secondary.button-style-dotted{color:#3f4fa0}:host.button-color-secondary.button-style-dotted:disabled{cursor:not-allowed}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0", ngImport: i0, type: ButtonLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-button-lib', template: '<ng-content></ng-content>', styles: [":host{box-sizing:border-box;display:inline-block;color:#fff;outline:0;border:0;cursor:pointer}:host.button-style-solid.button-color-default{background:#e4e4e4}:host.button-style-solid.button-color-default[disabled]{background:#e4e4e4;box-shadow:none;cursor:not-allowed;color:#a2a2a2}:host.button-style-solid.button-color-primary{background:#3f4fa0}:host.button-style-solid.button-color-primary[disabled]{background:#3f4fa0;box-shadow:none;cursor:not-allowed;color:#a2a2a2}:host.button-style-solid.button-color-primary.rest-effect{pointer-events:none}:host.button-style-solid.button-color-primary.hover-effect:hover:not([disabled]){background:#394892}:host.button-style-solid.button-color-primary.pressed-effect:active{background:#2d3872}:host.button-style-solid.button-color-secondary{background:#ecedf6}:host.button-style-solid.button-color-secondary[disabled]{background:#ecedf6;box-shadow:none;cursor:not-allowed;color:#a2a2a2}:host.button-style-solid.button-color-secondary.rest-effect{pointer-events:none}:host.button-style-solid.button-color-secondary.hover-effect:hover:not([disabled]){background:#d9dcec}:host.button-style-solid.button-color-secondary.pressed-effect:active{background:#c5cae3}:host.button-style-dotted.button-color-default{background:#e4e4e4;transition:background .3s,color .3s,border .3s}:host.button-style-dotted.button-color-default:focus{outline:2px dotted #1f1d5b;outline-offset:2px}:host.button-style-dotted.button-color-primary{background:#3f4fa0;transition:background .3s,color .3s,border .3s}:host.button-style-dotted.button-color-primary:focus{outline:2px dotted #1f1d5b;outline-offset:2px}:host.button-style-dotted.button-color-secondary{background:#ecedf6;transition:background .3s,color .3s,border .3s}:host.button-style-dotted.button-color-secondary:focus{outline:2px dotted #1f1d5b;outline-offset:2px}:host.button-size-medium,:host.button-size-large{font-size:16px;font-weight:700;line-height:30px;font-family:Manrope;font-style:normal;align-items:center}:host.button-size-medium{padding:8px 16px}:host.button-size-large{padding:8px 24px}:host.button-shape-rounded{border-radius:4px}:host.button-shape-pilled{border-radius:100px}:host.button-color-default:before{content:url(../../assets/16px/.Placeholder_icon-gray.png);position:relative;top:2px;margin-right:6px}:host.button-color-default{color:#a2a2a2}:host.button-color-default:disabled{cursor:not-allowed}:host.button-color-primary:before{content:url(../../assets/16px/.Placeholder_icon-white.png);position:relative;top:2px;margin-right:6px}:host.button-color-primary{color:#fff}:host.button-color-primary:disabled{cursor:not-allowed}:host.button-color-secondary:before{content:url(../../assets/16px/.Placeholder_icon-blue.png);position:relative;top:2px;margin-right:6px}:host.button-color-secondary{color:#3f4fa0}:host.button-color-secondary:disabled{cursor:not-allowed}:host.button-color-secondary.button-style-dotted:before{content:url(../../assets/16px/.Placeholder_icon-blue.png);position:relative;top:2px;margin-right:6px}:host.button-color-secondary.button-style-dotted{color:#3f4fa0}:host.button-color-secondary.button-style-dotted:disabled{cursor:not-allowed}\n"] }]
        }], propDecorators: { style: [{
                type: Input
            }], size: [{
                type: Input
            }], shape: [{
                type: Input
            }], color: [{
                type: Input
            }], effect: [{
                type: Input
            }], disabled: [{
                type: Input
            }], classes: [{
                type: HostBinding,
                args: ['class']
            }] } });

class ButtonLibModule {
}
ButtonLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0", ngImport: i0, type: ButtonLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.0", ngImport: i0, type: ButtonLibModule, declarations: [ButtonLibComponent], exports: [ButtonLibComponent] });
ButtonLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.0", ngImport: i0, type: ButtonLibModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0", ngImport: i0, type: ButtonLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ButtonLibComponent],
                    imports: [],
                    exports: [ButtonLibComponent],
                }]
        }] });

/*
 * Public API Surface of button-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonLibComponent, ButtonLibModule };
//# sourceMappingURL=button-lib.mjs.map
