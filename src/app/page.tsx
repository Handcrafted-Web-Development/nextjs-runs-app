
import TargetChoice from '../components/pages/targetPage'
import CharacterChoice from '../components/pages/characterPage'

export default function Home() {
    return (
        <div className='body-content'>
            <TargetChoice />
    
            <CharacterChoice />
        </div>
    );
}
