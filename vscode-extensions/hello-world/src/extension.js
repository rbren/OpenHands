const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('hello-world.helloWorld', function () {
        vscode.window.showInformationMessage('Hello World from OpenHands!');
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}