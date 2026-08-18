import "../css/style.css"
import { createPopper } from '@popperjs/core';

const button = document.querySelector('.btn');
let popovers;


let popperInstance;

const createPopover = () => {
    popovers = document.createElement('div');
    popovers.classList.add('popover');

    const popoverTitle = document.createElement('div');
    popoverTitle.classList.add('popover__title');
    popoverTitle.textContent = 'Popover title';

    const popoverText = document.createElement('div');
    popoverText.classList.add('popover__text');
    popoverText.textContent = 'And here\'s some amazing content. It\'s\n' +
        'very engaging. Right?';

    popovers.append(popoverTitle, popoverText);
}

button.addEventListener('click', () => {
    if (!popovers) {
        createPopover();
        document.body.append(popovers);

        popperInstance = createPopper(button, popovers, {
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
        popovers.remove();
        popovers = null;
    }
})
