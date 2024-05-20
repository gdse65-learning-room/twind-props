export default function Card(props) {
  return (
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src={props.url}
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 space-y-4">
        <blockquote>
          <p className="text-cyan-50 text-lg font-medium">{props.info}</p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">{props.name}</div>
          <div className="text-slate-700 dark:text-slate-500">
            {props.role}
          </div>
        </figcaption>
      </div>
    </figure>
  );
}
