
import { ReactElement } from 'react';
import Image from 'next/image';
import WinImage from '@/../../public/assets/img/win.png'
import LooseImage from '@/../../public/assets/img/loose.png'

export interface EndPopupProps {
    isWin: boolean;
}

export default function EndPopup({ isWin }: EndPopupProps): ReactElement {

    return (
        <div id="end_popup" className="popup">
            {isWin ? `
                <Image src=${WinImage} alt="gagné" width="69" height="69" />
                <p>Félicitations ! Vous avez réussi à atteindre votre objectif !</p>
            ` : `
                <Image src=${LooseImage} alt="perdu" width="69" height="69" />
                <p>Dommage... Vous n'avez pas réussi à atteindre votre objectif.</p>
            `}
        </div>
    );
}
