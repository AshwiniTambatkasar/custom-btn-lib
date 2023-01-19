import { Enum } from './enum';
import * as i0 from "@angular/core";
export declare class ButtonLibComponent {
    style?: Enum.ButtonStyle;
    size?: Enum.ButtonSize;
    shape?: Enum.ButtonShape;
    color?: Enum.ButtonColor;
    effect?: Enum.ButtonEffect;
    disabled?: string;
    get classes(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonLibComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonLibComponent, "lib-button-lib", never, { "style": "style"; "size": "size"; "shape": "shape"; "color": "color"; "effect": "effect"; "disabled": "disabled"; }, {}, never, ["*"], false, never>;
}
