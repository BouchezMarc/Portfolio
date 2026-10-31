import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Eye,
  Image,
  Layers,
  Network,
  Target,
  AlertTriangle,
  CheckCircle2,
  Scan,
} from "lucide-react";
import "./ClothesSegmentation.css";

const repo = "https://github.com/BouchezMarc/PF02-segmentation";
const outputImage =
  "https://raw.githubusercontent.com/BouchezMarc/PF02-segmentation/main/output.png";

const categories = [
  "Background",
  "Hat",
  "Hair",
  "Sunglasses",
  "Upper-clothes",
  "Skirt",
  "Pants",
  "Dress",
  "Belt",
  "Left-shoe",
  "Right-shoe",
  "Face",
  "Left-leg",
  "Right-leg",
  "Left-arm",
  "Right-arm",
  "Bag",
  "Scarf",
];

export default function ClothesSegmentation() {
  return (
    <main className="cseg-page">
      <section className="cseg-hero">
        <div className="cseg-hero-content">
          <span className="cseg-eyebrow">
            COMPUTER VISION · IMAGE SEGMENTATION
          </span>
          <h1>Analyse et segmentation de vêtements</h1>
          <p className="cseg-subtitle">
            Utilisation d'un modèle de segmentation pré-entraîné pour
            identifier les vêtements et différentes parties du corps
            à partir de photographies.
          </p>
          <div className="cseg-tags">
            {[
              "Python",
              "Hugging Face",
              "SegFormer",
              "Inference API",
              "Pillow",
              "NumPy",
              "Matplotlib",
              "Jupyter",
              "uv",
            ].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="cseg-hero-icon">
          <Scan size={76} strokeWidth={1.1} />
          <span>PIXEL-LEVEL ANALYSIS</span>
        </div>
      </section>

      <section className="cseg-section">
        <div className="cseg-heading">
          <span className="cseg-number">01</span>
          <div>
            <span className="cseg-kicker">OBJECTIF</span>
            <h2>Identifier les vêtements dans une image</h2>
          </div>
        </div>
        <p>
          L'objectif est de découvrir la segmentation d'images en utilisant
          un modèle d'intelligence artificielle déjà entraîné. À partir
          d'une photographie, le modèle attribue une classe à chaque pixel
          afin de distinguer les vêtements et certaines parties du corps.
        </p>
        <div className="cseg-objective">
          <Target size={23} />
          <div>
            <strong>Modèle utilisé</strong>
            <code>sayeed99/segformer_b3_clothes</code>
            <span>Modèle pré-entraîné accessible via Hugging Face</span>
          </div>
        </div>
        <p>
          Le travail porte sur la prise en main du modèle, l'appel à son
          API d'inférence, le décodage des masques et leur représentation
          visuelle. Il ne s'agit pas d'un entraînement ou d'un fine-tuning
          du modèle.
        </p>
      </section>

      <section className="cseg-section">
        <div className="cseg-heading">
          <span className="cseg-number">02</span>
          <div>
            <span className="cseg-kicker">FONCTIONNEMENT</span>
            <h2>De la photographie au masque segmenté</h2>
          </div>
        </div>
        <div className="cseg-workflow">
          <article>
            <div className="cseg-step-icon">
              <Image size={22} />
            </div>
            <span>01</span>
            <strong>Image source</strong>
            <p>Chargement d'une photographie à analyser.</p>
          </article>
          <article>
            <div className="cseg-step-icon">
              <Network size={22} />
            </div>
            <span>02</span>
            <strong>API Hugging Face</strong>
            <p>Envoi de l'image au modèle SegFormer.</p>
          </article>
          <article>
            <div className="cseg-step-icon">
              <Layers size={22} />
            </div>
            <span>03</span>
            <strong>Masques prédits</strong>
            <p>Récupération et décodage des résultats de segmentation.</p>
          </article>
          <article>
            <div className="cseg-step-icon">
              <Eye size={22} />
            </div>
            <span>04</span>
            <strong>Visualisation</strong>
            <p>Association des identifiants aux classes et aux couleurs.</p>
          </article>
        </div>
      </section>

      <section className="cseg-section">
        <div className="cseg-heading">
          <span className="cseg-number">03</span>
          <div>
            <span className="cseg-kicker">CLASSES</span>
            <h2>18 catégories détectables</h2>
          </div>
        </div>
        <p>
          Le masque associe un identifiant numérique à chaque catégorie.
          Une palette de couleurs permet de visualiser les différentes
          zones détectées dans l'image.
        </p>
        <div className="cseg-category-grid">
          {categories.map((category, index) => (
            <div className="cseg-category" key={category}>
              <span>{String(index).padStart(2, "0")}</span>
              <strong>{category}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="cseg-section cseg-result-section">
        <div className="cseg-heading">
          <span className="cseg-number">04</span>
          <div>
            <span className="cseg-kicker">RÉSULTAT VISUEL</span>
            <h2>Image originale et segmentation</h2>
          </div>
        </div>
        <p>
          La visualisation juxtapose la photographie d'origine, la légende
          des classes et le masque segmenté. Chaque couleur représente une
          catégorie prédite par le modèle.
        </p>
        <figure className="cseg-result-figure">
          <img
            src={outputImage}
            alt="Photographie originale, légende des classes et masque de segmentation des vêtements"
            loading="lazy"
          />
          <figcaption>
            <strong>Exemple de segmentation avec SegFormer</strong>
            <span>
              Résultat issu du dépôt : image d'entrée, correspondance des
              classes et masque de segmentation.
            </span>
          </figcaption>
        </figure>
      </section>

      <section className="cseg-section">
        <div className="cseg-heading">
          <span className="cseg-number">05</span>
          <div>
            <span className="cseg-kicker">ÉVALUATION</span>
            <h2>Premiers indicateurs de performance</h2>
          </div>
        </div>
        <p>
          Le README rapporte les résultats suivants pour l'évaluation
          réalisée dans le projet :
        </p>
        <div className="cseg-metrics">
          <div>
            <span>IoU moyen</span>
            <strong>0,9374</strong>
            <div className="cseg-track">
              <span style={{ width: "93.74%" }} />
            </div>
          </div>
          <div>
            <span>F1-score moyen</span>
            <strong>0,9677</strong>
            <div className="cseg-track">
              <span style={{ width: "96.77%" }} />
            </div>
          </div>
        </div>
        <p className="cseg-caption">
          Valeurs rapportées dans le README. Leur interprétation dépend
          notamment des masques de référence utilisés et du protocole
          d'évaluation.
        </p>
      </section>

      <section className="cseg-section">
        <div className="cseg-heading">
          <span className="cseg-number">06</span>
          <div>
            <span className="cseg-kicker">MISE EN ŒUVRE</span>
            <h2>Appel API et traitement des images</h2>
          </div>
        </div>
        <div className="cseg-tech-grid">
          <article>
            <h3>Accès au modèle</h3>
            <p>
              Authentification auprès de Hugging Face à l'aide d'un token
              personnel configuré dans un fichier d'environnement.
            </p>
            <code>python-dotenv · huggingface-hub</code>
          </article>
          <article>
            <h3>Traitement des images</h3>
            <p>
              Chargement, préparation, décodage des masques et manipulation
              des données d'image.
            </p>
            <code>Pillow · NumPy</code>
          </article>
          <article>
            <h3>Visualisation</h3>
            <p>
              Affichage de l'image originale et des masques avec une
              palette de couleurs dédiée aux classes.
            </p>
            <code>Matplotlib</code>
          </article>
        </div>
        <p>
          Le notebook prévoit également un traitement par lot, avec
          vérification des dimensions, délais d'attente, tentatives de
          relance et pauses entre les requêtes afin de mieux gérer les
          contraintes de l'API.
        </p>
      </section>

      <section className="cseg-section">
        <div className="cseg-heading">
          <span className="cseg-number">07</span>
          <div>
            <span className="cseg-kicker">LIMITES ET PERSPECTIVES</span>
            <h2>Analyser les erreurs de segmentation</h2>
          </div>
        </div>
        <div className="cseg-warning">
          <AlertTriangle size={21} />
          <div>
            <strong>Limites observées</strong>
            <p>
              Le README signale des difficultés de reconnaissance de la
              latéralité et des erreurs lorsque des membres se superposent.
              Une segmentation visuellement plausible ne garantit donc
              pas une prédiction correcte pour chaque classe.
            </p>
          </div>
        </div>
        <ul className="cseg-list">
          <li>La qualité des résultats dépend des images soumises au modèle.</li>
          <li>
            Les limites de l'API et les erreurs réseau doivent être prises
            en compte lors du traitement par lot.
          </li>
          <li>
            Une évaluation quantitative fiable nécessite des masques de
            référence associés aux images.
          </li>
          <li>
            Les résultats doivent être analysés classe par classe, et pas
            uniquement à partir d'une moyenne globale.
          </li>
        </ul>
        <h3>Prolongements possibles</h3>
        <p>
          Constituer un jeu d'images annotées, comparer les prédictions aux
          masques de référence et étudier les erreurs par catégorie à l'aide
          de l'IoU et du Dice Score.
        </p>
      </section>

      <section className="cseg-conclusion">
        <span className="cseg-kicker">CONCLUSION</span>
        <h2>Découvrir la segmentation sémantique par l'expérimentation</h2>
        <p>
          Ce projet constitue une première mise en pratique de la vision
          par ordinateur : utiliser un modèle pré-entraîné, interagir avec
          une API d'inférence, manipuler des masques et analyser des
          résultats de segmentation. Il pose les bases pour aborder des
          projets plus avancés de Computer Vision.
        </p>
        <div className="cseg-conclusion-tag">
          <CheckCircle2 size={18} />
          <span>Projet d'initiation · Modèle pré-entraîné</span>
        </div>
      </section>

      <footer className="cseg-footer">
        <Link to="/" className="cseg-back">
          <ArrowLeft size={16} />
          Retour aux projets
        </Link>
        <a href={repo} target="_blank" rel="noreferrer">
          Consulter le code source
          <ArrowUpRight size={16} />
        </a>
      </footer>
    </main>
  );
}