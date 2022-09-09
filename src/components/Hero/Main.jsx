export default function MainHero(props) {
  return (
    <div className="hero">
      <p className="text-primary">
        {props.heading.normal} <b>{props.heading.bolded}</b> {props.heading.rest}
      </p>
      <p className="mb-0">{props.description}</p>
      <a href={props.button.link} className="btn btn-primary btn-lg">
        {props.button.text}
      </a>
    </div>
  );
}
