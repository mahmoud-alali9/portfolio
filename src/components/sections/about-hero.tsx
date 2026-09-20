const AboutHero = () => {
  return (
    <section className="hero-padding pb-12.5 md:pb-15 lg:pb-18.75">
      <div className="container">
        <h1 className="text-3xl md:text-4xl">À propos de moi</h1>
      </div>

      <div className="container space-y-10">
        <h2 className="text-2xl">Parcours</h2>

        <div className="text-muted-foreground space-y-8 text-lg">
          <p>
            Je suis actuellement en double M2 à Montpellier : Intelligence
            Artificielle et Science des Données à l&apos;Université de
            Montpellier, et Management des Technologies et des Sciences à
            l&apos;IAE Montpellier.
          </p>

          <p>
            Je construis des systèmes RAG, des agents LLM et des Knowledge
            Graphs — du prototype jusqu&apos;à l&apos;évaluation avec des
            métriques concrètes (RAGAS, faithfulness, context recall).
            J&apos;aime autant l&apos;ingénierie que la rigueur de la mesure :
            un système qui marche « à l&apos;oeil » ne m&apos;intéresse pas,
            je veux savoir ce qu&apos;il vaut vraiment.
          </p>

          <p>
            Je suis disponible pour une alternance de 12 mois dès maintenant,
            ou un stage de fin d&apos;études de 6 mois en janvier, février ou
            mars 2027.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
