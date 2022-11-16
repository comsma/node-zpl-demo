import { default as Zpl } from '@epickris/zpl';
import * as ZplCommands from '@epickris/zpl/dist/commands';

export function renderZpl(): string {
    const zpl = new Zpl();

    zpl.addZpl([
        ZplCommands.fieldOrigin(50,50),
        ZplCommands.changeAlphanumericDefaultFont('1', 50),
        ZplCommands.fieldBlock(600,3),
        ZplCommands.fieldData('Hello i am a text box and i am very large :)'),
        ZplCommands.printQuantity(3)
    ])
    return zpl.getZpl()
}