import React from "react";
import { techStackDetails } from "../Details";


function Technologies() {
  const {
    // Programming Languages
    python, java, c, html, css, js, php, sql, yaml, xml, shell, bash, cypher, dart,

    // Developer Tools
    vscode, intellij, jupyter, androidstudio, postman, pycharm, spyder, virtualbox, vagrant, vmware,

    // Frameworks Web
    flask, react,

    // DBMS
    mongodb, postgresql, neo4j, redis, mysql,

    // OS
    ubuntu, debian, kali, parrot,

    // DevOps
    git, github, gitlab, docker, podman, portainer, kubernetes, helm, kustomize, ansible, jenkins, ghactions, glci, sonarqube,

    // DevSecOps
    trivy, syft, grype, vault, zap, snyk,

    // Monitoring
    prometheus, grafana, loki, elk,

    // GitOps
    argocd,

    // Big Data
    hadoop, spark,

    // Machine Learning
    nlp, llm, nltk, textblob, tensorflow, sklearn,

    // Libraries
    pandas, numpy, matplotlib, seaborn, bs, htmlparser
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20">
{/* Programming Languages */}
<section>
  <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold pt-10 text-dark-heading dark:text-light-heading">Programming Languages</h1>
  <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 pt-6">
    <img src={python} title="Python" alt="Python" className="w-20 mx-auto" />
    <img src={java} title="Java" alt="Java" className="w-20 mx-auto" />
    <img src={c} title="C" alt="C" className="w-20 mx-auto" />
    <img src={html} title="HTML" alt="HTML" className="w-20 mx-auto" />
    <img src={css} title="CSS" alt="CSS" className="w-20 mx-auto" />
    <img src={js} title="JavaScript" alt="JavaScript" className="w-20 mx-auto" />
    <img src={php} title="PHP" alt="PHP" className="w-20 mx-auto" />
    <img src={sql} title="SQL" alt="SQL" className="w-20 mx-auto" />
    <img src={yaml} title="YAML" alt="YAML" className="w-20 mx-auto" />
    <img src={xml} title="XML" alt="XML" className="w-20 mx-auto" />
    <img src={shell} title="Shell Script" alt="Shell" className="w-40 mx-auto" />
    <img src={bash} title="Bash" alt="Bash" className="w-20 mx-auto" />
    <img src={cypher} title="Cypher" alt="Cypher" className="w-20 mx-auto" />
    <img src={dart} title="Dart" alt="Dart" className="w-20 mx-auto" />
  </div>
</section>

{/* Developer Tools */}
<section className="pt-8">
  <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold pt-10 text-dark-heading dark:text-light-heading">Programming Languages</h1>
  <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
    <img src={vscode} title="VS Code" alt="VS Code" className="w-20 mx-auto" />
    <img src={intellij} title="IntelliJ IDEA" alt="IntelliJ" className="w-20 mx-auto" />
    <img src={jupyter} title="Jupyter" alt="Jupyter" className="w-26 mx-auto" />
    <img src={androidstudio} title="Android Studio" alt="Android Studio" className="w-20 mx-auto" />
    <img src={postman} title="Postman" alt="Postman" className="w-20 mx-auto" />
    <img src={pycharm} title="PyCharm" alt="PyCharm" className="w-20 mx-auto" />
    <img src={spyder} title="Spyder" alt="Spyder" className="w-20 mx-auto" />
    <img src={virtualbox} title="VirtualBox" alt="VirtualBox" className="w-20 mx-auto" />
    <img src={vagrant} title="Vagrant" alt="Vagrant" className="w-20 mx-auto" />
    <img src={vmware} title="VMware Workstation" alt="VMware" className="w-20 mx-auto" />
  </div>
</section>

{/* Frameworks */}
<section>
  <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold pt-10 text-dark-heading dark:text-light-heading">Frameworks (Web)</h1>
  <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 pt-6">
    <img src={flask} title="Flask" alt="Flask" className="w-20 mx-auto" />
    <img src={react} title="React" alt="React" className="w-20 mx-auto" />
  </div>
</section>

{/* Databases */}
<section>
  <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold pt-10 text-dark-heading dark:text-light-heading">Database Systems</h1>
  <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 pt-6">
    <img src={mongodb} title="MongoDB" alt="MongoDB" className="w-20 mx-auto" />
    <img src={postgresql} title="PostgreSQL" alt="PostgreSQL" className="w-20 mx-auto" />
    <img src={neo4j} title="Neo4j" alt="Neo4j" className="w-20 mx-auto" />
    <img src={redis} title="Redis" alt="Redis" className="w-20 mx-auto" />
    <img src={mysql} title="MySQL" alt="MySQL" className="w-20 mx-auto" />
  </div>
</section>

{/* DevOps */}
<section>
  <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold pt-10 text-dark-heading dark:text-light-heading">DevOps</h1>
  <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 pt-6">
    <img src={git} title="Git" alt="Git" className="w-20 mx-auto" />
    <img src={github} title="GitHub" alt="GitHub" className="w-20 mx-auto" />
    <img src={gitlab} title="GitLab" alt="GitLab" className="w-20 mx-auto" />
    <img src={docker} title="Docker" alt="Docker" className="w-20 mx-auto" />
    <img src={podman} title="Podman" alt="Podman" className="w-20 mx-auto" />
    <img src={portainer} title="Portainer" alt="Portainer" className="w-20 mx-auto" />
    <img src={kubernetes} title="Kubernetes" alt="Kubernetes" className="w-20 mx-auto" />
    <img src={helm} title="Helm" alt="Helm" className="w-20 mx-auto" />
    <img src={kustomize} title="Kustomize" alt="Kustomize" className="w-20 mx-auto" />
    <img src={ansible} title="Ansible" alt="Ansible" className="w-20 mx-auto" />
    <img src={jenkins} title="Jenkins" alt="Jenkins" className="w-20 mx-auto" />
    <img src={ghactions} title="GitHub Actions" alt="GitHub Actions" className="w-20 mx-auto" />
    <img src={glci} title="GitLab CI" alt="GitLab CI" className="w-20 mx-auto" />
    <img src={sonarqube} title="SonarQube" alt="SonarQube" className="w-20 mx-auto" />
  </div>
</section>

{/* DevSecOps */}
<section>
  <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold pt-10 text-dark-heading dark:text-light-heading">DevSecOps</h1>
  <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 pt-6">
    <img src={trivy} title="Trivy" alt="Trivy" className="w-20 mx-auto" />
    <img src={syft} title="Syft" alt="Syft" className="w-20 mx-auto" />
    <img src={grype} title="Grype" alt="Grype" className="w-20 mx-auto" />
    <img src={vault} title="Vault" alt="Vault" className="w-20 mx-auto" />
    <img src={zap} title="OWASP ZAP" alt="ZAP" className="w-20 mx-auto" />
    <img src={snyk} title="Snyk" alt="Snyk" className="w-20 mx-auto" />
  </div>
</section>

{/* Monitoring */}
<section>
  <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold pt-10 text-dark-heading dark:text-light-heading">Monitoring Tools</h1>
  <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 pt-6">
    <img src={prometheus} title="Prometheus" alt="Prometheus" className="w-20 mx-auto" />
    <img src={grafana} title="Grafana" alt="Grafana" className="w-26 mx-auto" />
    <img src={loki} title="Loki" alt="Loki" className="w-20 mx-auto" />
    <img src={elk} title="ELK Stack" alt="ELK" className="w-26 mx-auto" />
  </div>
</section>

{/* Machine Learning */}
<section>
  <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold pt-10 text-dark-heading dark:text-light-heading">Machine Learning</h1>
  <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 pt-6">
    <img src={nlp} title="NLP" alt="NLP" className="w-20 mx-auto" />
    <img src={llm} title="LLM" alt="LLM" className="w-20 mx-auto" />
    <img src={nltk} title="NLTK" alt="NLTK" className="w-20 mx-auto" />
    <img src={textblob} title="TextBlob" alt="TextBlob" className="w-20 mx-auto" />
    <img src={tensorflow} title="TensorFlow" alt="TensorFlow" className="w-20 mx-auto" />
    <img src={sklearn} title="Scikit-learn" alt="Scikit-learn" className="w-20 mx-auto" />
  </div>
</section>

{/* Libraries */}
<section>
  <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold pt-10 text-dark-heading dark:text-light-heading">Libraries</h1>
  <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 pt-6">
    <img src={pandas} title="Pandas" alt="Pandas" className="w-20 mx-auto" />
    <img src={numpy} title="NumPy" alt="NumPy" className="w-20 mx-auto" />
    <img src={matplotlib} title="Matplotlib" alt="Matplotlib" className="w-20 mx-auto" />
    <img src={seaborn} title="Seaborn" alt="Seaborn" className="w-20 mx-auto" />
    <img src={bs} title="BeautifulSoup" alt="BeautifulSoup" className="w-20 mx-auto" />
    <img src={htmlparser} title="HTML Parser" alt="HTML Parser" className="w-20 mx-auto" />
  </div>
</section>

    </main>
  );
}

export default Technologies;
