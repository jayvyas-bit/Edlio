export default function PrincipalMessage() {
  return (
    <section className="bg-[#F5F1EA] pb-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=900&auto=format&fit=crop"
          alt="Principal in hallway"
          className="w-full h-72 sm:h-96 rounded-2xl object-cover"
        />

        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
          <h2 className="text-[32px] font-extrabold uppercase tracking-wide text-[#101B33] mb-4">
            Principal&rsquo;s Message
          </h2>
          <p className="text-sm text-[#4a453d] leading-relaxed">
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
        </div>
      </div>
    </section>
  );
}
