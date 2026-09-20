const About = () => {
  return (
    <section className="section-padding bigger-container space-y-11 md:space-y-21">
      <div className="space-y-10 md:container">
        <h2 className="text-2xl leading-none">About</h2>
        <div className="text-muted-foreground space-y-8 text-lg md:space-y-11">
          <p>
            Je travaille sur des pipelines RAG, des agents LLM et des
            Knowledge Graphs — de la modélisation des données jusqu&apos;à
            l&apos;évaluation avec des métriques concrètes (RAGAS,
            faithfulness, context recall).
          </p>
          <p>
            Mon socle technique : Python, LlamaIndex, LangChain, FAISS,
            SPARQL et Apache Jena Fuseki côté IA et web sémantique ;
            scikit-learn, pandas et PyTorch côté ML/NLP.
          </p>
          <p>
            En dehors de l&apos;IA, je m&apos;intéresse au pilotage de projets
            technologiques (double diplôme en management), et je suis
            disponible pour une alternance ou un stage de fin d&apos;études.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
