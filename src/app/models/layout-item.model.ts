export type WidgetType = 
| 'input'
| 'button'
| 'dropdown'
| 'radio'
| 'container';

export interface LayoutItem {
    id: string;
    type: WidgetType;

    x: number;
    y: number;

    width: number;
    height: number;

    properties?: {
        placeholder?: string;
        label?: string;
        selectedOption?: string;

    };

    saved?: Boolean;
}