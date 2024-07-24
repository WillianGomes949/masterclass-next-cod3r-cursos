import Button from '../button/Button';
import CardVideo from '../carroselVideo/CardVideo';

export default function SectionVideos(props) {
  return (
    <div className="w-4/5 m-auto">
      <Button>{props.area}</Button>
      <section className="flex text-gray-800">
        <CardVideo key="video" video="bicicleta" />
        <CardVideo key="carro" video="carro" />
        <CardVideo key="voar" video="voar no ar" />
        <CardVideo key="correr" video="correr" />
      </section>
    </div>
  );
}
