import '@/styles/main.scss';
import '@/styles/end-popup.scss';

import { ReactElement } from 'react';
import Image from 'next/image';
import WinImage from '@/../../public/assets/img/win.png'
import LooseImage from '@/../../public/assets/img/loose.png'

interface EndPopupProps {
    isWin: string | null;
}

export default function EndPopup({ isWin }: EndPopupProps): ReactElement {

    return (
        <div id="end_popup" className="popup">
            {isWin === "true" ? (
                <>
                    <Image src={WinImage} alt="gagné" width={69} height={69} />
                    <p>Félicitations ! Tu as réussi à atteindre ton objectif !</p>
                </>
            ) : (
                <>
                    <Image src={LooseImage} alt="perdu" width={69} height={69} />
                    <p>Dommage... Tu n&apos;as pas réussi à atteindre ton objectif.</p>
                </>
            )}
            <button>Recommencer</button>
        </div>
    );
}