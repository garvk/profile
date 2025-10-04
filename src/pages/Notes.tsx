const Notes = () => {
  const notes = [
    {
      title: "variable fonts",
      date: "2025-03-15",
      content: "variable fonts offer flexibility, but best implementations use restraint. limit axes, define clear presets, test at actual sizes.",
    },
    {
      title: "8pt grid myth",
      date: "2025-03-12",
      content: "8pt grids are helpful but not sacred. optical alignment matters more than mathematical precision. trust your eye.",
    },
    {
      title: "pattern language",
      date: "2025-03-08",
      content: "christopher alexander's ideas about patterns apply to design systems. each component should solve a recurring problem elegantly.",
    },
    {
      title: "speed vs velocity",
      date: "2025-03-03",
      content: "moving fast means nothing if you're going in the wrong direction. velocity requires both speed and direction.",
    },
    {
      title: "white space as material",
      date: "2025-02-28",
      content: "in digital design, negative space isn't empty—it's a material with weight and structure. use it intentionally.",
    },
    {
      title: "learning from print",
      date: "2025-02-24",
      content: "print designers solved hierarchy, rhythm, and readability decades ago. study editorial design, not just digital interfaces.",
    },
    {
      title: "api as interface",
      date: "2025-02-20",
      content: "component apis are user interfaces for developers. apply the same rigor to prop design as you would to visual design.",
    },
    {
      title: "importance of names",
      date: "2025-02-15",
      content: "naming things well is design work. good names create mental models. bad names create confusion and technical debt.",
    },
    {
      title: "tools shape thought",
      date: "2025-02-10",
      content: "figma makes certain design decisions easy and others hard. be aware of how your tools bias your thinking.",
    },
    {
      title: "less is harder",
      date: "2025-02-05",
      content: "simplification requires understanding the problem deeply enough to know what's essential. it's careful reduction.",
    },
  ];

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-2xl font-semibold mb-4">notes</h1>
        <p className="text-sm text-muted-foreground max-w-2xl">
          brief observations, reading notes, and ideas in progress. 
          less polished, more spontaneous. public thinking.
        </p>
      </section>

      <section className="space-y-1">
        {notes.map((note) => (
          <article 
            key={note.title}
            className="py-4 border-b border-border last:border-0"
          >
            <div className="flex items-baseline justify-between mb-2 gap-4">
              <h2 className="text-base font-medium">{note.title}</h2>
              <time className="text-xs text-muted-foreground whitespace-nowrap">
                {note.date}
              </time>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              {note.content}
            </p>
          </article>
        ))}
      </section>

      <section className="pt-6 border-t border-border text-xs text-muted-foreground">
        <p>
          unfiltered thoughts — some will evolve into essays, others remain as fragments. 
          all meant to be shared and discussed.
        </p>
      </section>
    </div>
  );
};

export default Notes;
