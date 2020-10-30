
/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';
import * as che from '@eclipse-che/plugin';
export function start(context: theia.PluginContext) {
    const informationMessageTestCommand = {
        id: 'restart-workspace-example-no-prompt',
        label: "example: restart workspace (no prompt)"
    };
    context.subscriptions.push(theia.commands.registerCommand(informationMessageTestCommand, async (...args: any[]) => {
        theia.window.showInformationMessage('Restarting workspace....');
        const options = {
            prompt: false,
        }
        const result = await (che.workspace as any).restartWorkspace(options);
        theia.window.showInformationMessage(`result is ${result}`);
    }));

    const informationMessageTestWithPromptCommand = {
        id: 'restart-workspace-example-prompt',
        label: "example: restart workspace with prompt"
    };
    context.subscriptions.push(theia.commands.registerCommand(informationMessageTestWithPromptCommand, async (...args: any[]) => {
        theia.window.showInformationMessage('Restarting workspace....');
        const options = {
            prompt: true,
            promptMsg: 'this is a custom message prompt. Restart workspace ?'
        }

        const result = await (che.workspace as any).restartWorkspace(options);
        theia.window.showInformationMessage(`result is ${result}`);
    }));


}

export function stop() {

}
