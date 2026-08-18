import "../css/style.css"
import { createPopper } from '@popperjs/core';

const button = document.querySelector('.btn');
let popover;


let popperInstance;

const createPopover = () => {
    popover = document.createElement('div');
    popover.classList.add('popover');

    const popoverTitle = document.createElement('div');
    popoverTitle.classList.add('popover__title');
    popoverTitle.textContent = 'Popover title';

    const popoverText = document.createElement('div');
    popoverText.classList.add('popover__text');
    popoverText.textContent = 'And here\'s some amazing content. It\'s\n' +
        'very engaging. Right?';

    popover.append(popoverTitle, popoverText);
}

button.addEventListener('click', () => {
    if (!popover) {
        createPopover();
        document.body.append(popover);

        popperInstance = createPopper(button, popover, {
            placement: 'top',
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 10],
                    },
                },
            ],
        });
    }else {
        popperInstance.destroy();
        popperInstance = null;
        popover.remove();
        popover = null;
    }
})
