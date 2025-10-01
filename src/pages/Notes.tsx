const Notes = () => {
  const notes = [
    {
      title: "On variable fonts",
      date: "March 15, 2025",
      content: "Variable fonts offer incredible flexibility, but the best implementations use restraint. Limit axes, define clear presets, test at actual sizes.",
    },
    {
      title: "The 8pt grid myth",
      date: "March 12, 2025",
      content: "8pt grids are helpful but not sacred. Optical alignment matters more than mathematical precision. Trust your eye.",
    },
    {
      title: "Reading: Pattern Language",
      date: "March 8, 2025",
      content: "Christopher Alexander's ideas about patterns apply beautifully to digital design systems. Each component should solve a recurring problem elegantly.",
    },
    {
      title: "Speed vs velocity",
      date: "March 3, 2025",
      content: "Moving fast means nothing if you're going in the wrong direction. Velocity requires both speed and direction. Take time to point correctly first.",
    },
    {
      title: "White space as material",
      date: "February 28, 2025",
      content: "In digital design, negative space isn't empty—it's a material with weight and structure. Use it intentionally.",
    },
    {
      title: "Learning from print",
      date: "February 24, 2025",
      content: "Print designers solved hierarchy, rhythm, and readability decades ago. Study editorial design, not just digital interfaces.",
    },
    {
      title: "API as interface",
      date: "February 20, 2025",
      content: "Component APIs are user interfaces for developers. Apply the same rigor to prop design as you would to visual design.",
    },
    {
      title: "The importance of names",
      date: "February 15, 2025",
      content: "Naming things well is design work. Good names create mental models. Bad names create confusion and technical debt.",
    },
    {
      title: "Tools shape thought",
      date: "February 10, 2025",
      content: "Figma makes certain design decisions easy and others hard. Be aware of how your tools bias your thinking.",
    },
    {
      title: "Less is more is harder",
      date: "February 5, 2025",
      content: "Simplification requires understanding the problem deeply enough to know what's essential. It's not about removing randomly—it's about careful reduction.",
    },
  ];

  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-5xl font-serif font-semibold mb-6 pb-6 border-b border-border">
          Notes
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Brief observations, reading notes, and ideas in progress. Less polished than essays, 
          more considered than tweets.
        </p>
      </section>

      <section className="space-y-8">
        {notes.map((note, index) => (
          <article 
            key={note.title}
            className="group py-6 border-b border-border last:border-0"
          >
            <div className="flex items-baseline gap-4 mb-3">
              <h2 className="text-lg font-serif font-semibold group-hover:opacity-60 transition-opacity">
                {note.title}
              </h2>
              <span className="text-xs text-muted-foreground">·</span>
              <time className="text-xs text-muted-foreground">
                {note.date}
              </time>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              {note.content}
            </p>
          </article>
        ))}
      </section>

      <section className="pt-8">
        <p className="text-sm text-muted-foreground">
          These notes are unfiltered thoughts and work-in-progress ideas. Some may evolve into 
          full essays, others remain as fragments. All are public thinking.
        </p>
      </section>
    </div>
  );
};

export default Notes;
