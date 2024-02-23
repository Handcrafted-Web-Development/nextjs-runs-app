import Image from 'next/image';
import '@/styles/loader.scss';

export default function Loader() {
  return (
    <div className="loader">
      <Image
        src="/assets/img/loader/runner.gif"
        width={255}
        height={350}
        alt="Un coureur aguérit nous faisant une démonstration"
      />
      <div className="loader__text">Running...</div>
    </div>
  );
}
