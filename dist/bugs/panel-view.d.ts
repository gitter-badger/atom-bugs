export declare class BugsPanelView {
    private element;
    private scheme;
    private schemePath;
    private selectPath;
    private events;
    constructor();
    getSelectedSchemeName(): string;
    setScheme(plugin: any): void;
    didOpenSchemeEditor(callback: any): void;
    setPathName(name: string): void;
    setPaths(paths: Array<string>): void;
    getElement(): HTMLElement;
    destroy(): void;
}
