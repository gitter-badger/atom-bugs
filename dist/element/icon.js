'use babel';
export function createIcon(name) {
    let icon = document.createElement('i');
    icon.className = `bugs-icon bugs-icon-${name}`;
    return icon;
}
export function createIconFromPath(path) {
    let icon = document.createElement('i');
    icon.className = `bugs-icon`;
    icon.style.backgroundImage = `url(${path})`;
    return icon;
}
//# sourceMappingURL=icon.js.map