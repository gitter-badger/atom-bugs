export declare class Bugs {
    private breakpoints;
    constructor();
    destroy(): void;
    observeEditor(editor: any): void;
    getBreakpoint(filePath: String, lineNumber: Number): any;
    addBreakpoint(marker: any, lineNumber: Number, filePath: String): void;
}
