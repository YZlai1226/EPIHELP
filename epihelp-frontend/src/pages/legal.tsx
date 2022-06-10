import EachsLayout from './../components/Layouts/EachsLayout'
import AppLayout from './../components/Layouts/AppLayout'

const Legal = () => (
  <AppLayout
    header={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Terms and Condition
      </h2>
    }>
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <h1 className="text-4xl text-purple-600/100">Mentions légales</h1>
            <br />
            <p>Le présent site est édité par l'association déclarée Association EPITECH</p>
            <p>SIREN 423 855 196 - code NAF 8559A.</p>
            <p>N° TVA intracommunautaire: FR 69423855196 (Exonérée de TVA pour ses prestations d'enseignement).</p>
            <br />
            <h6 className="text-lg font-bold">Epitech</h6>
            <p>24, rue Pasteur </p>
            <p>94270 Kremlin-Bicêtre</p>
            <p>France</p>
            <p>Tel : 01 44 08 00 50</p>
            <p>Fax : 01 44 08 01 20</p>
            <br />
            <h6 className="text-lg font-bold">Le Directeur de la publication est :</h6>
            <p>Emmanuel Carli, Directeur </p>
            <p>24, rue Pasteur </p>
            <p>94270 Kremlin-Bicêtre</p>
            <p>France</p>
            <p>Tel : 01 44 08 00 50</p>
            <br />
            <h6 className="text-lg font-bold">Contact technique</h6>
            <p>IONIS Education Group</p>
            <p>2, rue des 4 fils</p>
            <p>75003 Paris</p>
            <p>Tel standard : 01 44 54 13 06</p>
            <br />
            <p>Le présent site est hébergé par</p>
            <p>KITN</p>
            <br />
            <br />
            <br />
            <h1 className="text-4xl text-purple-600/100">Définitions</h1>
            <br />
            <h6 className="text-lg font-bold">L'Éditeur:</h6>
            <p>La personne, physique ou morale, qui édite les services de communication au public en ligne.</p>
            <h6 className="text-lg font-bold">Le Site:</h6>
            <p>La personne, physique ou morale, qui édite les services de communication au public en ligne.</p>
            <h6 className="text-lg font-bold">L'Utilisateur:</h6>
            <p>La personne, physique ou morale, qui édite les services de communication au public en ligne.</p>
            <br />
            <p>Epitech agit en tant que responsable du traitement de données personnelles
              confiées par l'Utilisateur de la Plateforme. L'Utilisateur peut exercer ses droits à tout moment.</p>
            <br />
            <p>Le développement et l'hébergement de la Plateforme sont assurés
              par la Direction des systèmes d'information.</p>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
)

export default Legal
