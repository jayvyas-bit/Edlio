export default function PrincipalMessage() {
  return (
    <section className="pb-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-y-8">
        <div className="bg-white shadow-md p-6 sm:p-8 rounded-tl-[8px] rounded-bl-[8px] flex flex-col h-full justify-center">
          <h2 className="text-[32px] font-extrabold uppercase tracking-wide text-[#101B33] mb-[8px] h-max">
            Principal&rsquo;s Message
          </h2>
          <p className="text-sm text-[#000000] leading-relaxed mb-6">
            Welcome to our school! I am so pleased to welcome our new students
            as well as our returning students. We have made many recent
            improvements to our campus and we continue to expand our
            extra-curricular programs to ensure that all students make the most
            of their time and explore a broad variety of interests. We believe
            that parent participation is key to student success; our new website
            is designed to provide parents with all the information they need to
            be active participants in their student&rsquo;s education. You will
            find that the site works just as well on mobile devices as it does
            on a desktop so you can find information on the go. As always, I am
            happy to receive feedback and suggestions and my door is always
            open. Here&rsquo;s to another great year!
          </p>
          <button className="bg-[oklch(22.6%_.0495_264.23)] hover:bg-[#8B6A1F] active:bg-[#050c17] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9812E] text-xs font-bold uppercase tracking-wide px-6 py-2.5 rounded-lg transition-colors w-max [color:oklch(0.627_0.1098_82.164)]">
            Learn More
          </button>
        </div>
        <img
          src="/images/principal.jpg"
          alt="Principal in hallway"
          className="w-full h-full object-cover rounded-tr-[8px] rounded-br-[8px]"
        />

      </div>
    </section>
  );
}
