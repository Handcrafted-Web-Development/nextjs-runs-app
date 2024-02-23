import { ReactElement } from 'react';

export interface EndPopupProps {
    isWin: boolean;
}

export default function EndPopup({ isWin }: EndPopupProps): ReactElement {

    return (
        <div id="end_popup" className="popup">
            {isWin ? (
                <>
                    <p>Félicitations ! Vous avez réussi à atteindre votre objectif !</p>
                </>
            ) : (
                <>
                    <p>Dommage... Vous n'avez pas réussi à atteindre votre objectif.</p>
                </>
            )}
        </div>
    );
}
