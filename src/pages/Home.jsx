import { Link } from "react-router-dom";
import Sport from "./Sport";
import logo from "../images/Sport-Club-Ulbra-RS-1-900x0.png";
import stars from "../images/stars.png";
import infinity from "../images/infinity.webp";
import fun from"../images/fun.gif";

const Home = () => {
    return ( 
        <div className="overflow-x-hidden font-mono text-[40px] w-screen h-[screen] lg:h-screen bg-300 ">
              <img
                className="overflow-x-hidden w-[15%] h-auto mx-auto mb-5 lg:w-[28%]"
                src={logo}
                alt=""
              />
              <div className="h-[fit-content] w-screen bg-50 bg-opacity-[85%] text-center p-3 mb-20 ">
                <p className="text-[20px] w-[50%] text-center mx-auto m-5">
Ο αθλητικός σύλλογος ULBRA ξεχωρίζει για τις εξαιρετικές εγκαταστάσεις και το υψηλό επίπεδο προπόνησης. Οι αθλητές του σημειώνουν εξαιρετικές επιδόσεις σε διάφορα αθλήματα, αναδεικνύοντας τον σύλλογο ως ένα κέντρο αθλητικής αριστείας. Με διαρκή δέσμευση στην ποιότητα και την εκπαίδευση, ο ULBRA διαμορφώνει αθλητές που ξεχωρίζουν σε εθνικό και διεθνές επίπεδο, συμβάλλοντας στην ανάπτυξη του αθλητισμού και την εξέλιξη των αθλητικών κοινοτήτων.</p>
              </div>
              
              <div className="flex lg:flex-row w-[95%] mx-auto h-fit justify-center items-center flex-col font-mono">
                <div className="flex flex-col bg-50 m-5 rounded-xl w-[100%]">
                  <img className="w-[200px] h-auto mx-auto m-6" src={stars} />
                  <p className="text-[15px] w-[50%] text-center mx-auto m-1 mb-10"> 
Ο σύλλογος ULBRA διακρίνεται για την αξιοπιστία και την υψηλή ποιότητα που προσφέρει. Με πολυετή ιστορία αθλητικής αριστείας, ο ULBRA έχει αποκτήσει φήμη για τις αξιόπιστες εγκαταστάσεις του και τον κορυφαίο εξοπλισμό προπόνησης. Οι αθλητές του επωφελούνται από το υψηλό επίπεδο εκπαίδευσης και την επαγγελματική υποστήριξη, καθιστώντας τον ULBRA έναν αξιόπιστο πυλώνα αθλητικής κοινότητας και επιτυχημένων αθλητικών προσπαθειών.</p>
                </div>
                <div className="flex flex-col bg-50 m-5 rounded-xl w-[100%] ">
                  <img className="w-[200px] h-auto mx-auto m-8" src={infinity} />
                  <p className="text-[15px] w-[50%] text-center mx-auto m-1 mb-10"> 
                  Με μια εντυπωσιακή διαχρονική παρουσία στον χώρο του αθλητισμού, ο σύλλογος ULBRA αναδεικνύεται ως πρωτοπόρος και σημαντικός παράγοντας στον αθλητικό χάρτη. Με πολλές επιτυχίες σε διάφορες αθλητικές κατηγορίες και συνεχή προσφορά στην ανάπτυξη του αθλητισμού, ο ULBRA έχει ενσωματώσει τις αξίες της αρετής και του ανταγωνισμού στην καρδιά της πορείας του. Η αφοσίωσή του στην προώθηση του αθλητισμού και η συνεχής προσπάθεια για την υποστήριξη των αθλητών του επιβεβαιώνουν τον ρόλο του ως θεμέλιος λίθος στον αθλητικό χώρο.                                                         
                  </p>
                </div>
                <div className="flex flex-col bg-50 m-5 rounded-xl w-[100%]">
                  <img className="w-[200px] h-auto mx-auto" src={fun} />
                  <p className="text-[15px] w-[50%] text-center mx-auto m-1 mb-10"> 
                  
Ο σύλλογος ULBRA στοχεύει ψηλά, καταρτίζοντας φιλόδοξους μελλοντικούς στόχους που αντικατοπτρίζουν τη φιλοδοξία του να είναι πρωτοπόρος στον αθλητισμό. Με στρατηγικές επενδύσεις στην ανάπτυξη των νέων ταλέντων, την τεχνολογική καινοτομία, και τη δημιουργία προηγμένων εγκαταστάσεων, ο ULBRA καθοδηγεί τον αθλητισμό προς ένα λαμπρό μέλλον. Εμπνεόμενος από την ανάγκη για συνεχή βελτίωση, αναδεικνύει τον εαυτό του ως πρωταγωνιστή στη διαμόρφωση της επόμενης γενιάς αθλητισμού.
                  </p>
                </div>

              </div>
              <h1 className="text-50 text-center text-[50px] mt-[200px]">Περισσότερες πληροφορίες</h1>
            <div className=" overflow-x-hidden w-screen flex flex-col border-t-4 border-dashed border-t-50 justify-center text-center lg:flex-row mb-[100px]">
                 
               <div className="flex flex-col m-5 p-2 sm:m-0"> 
                <Link className="m-5 border-4 rounded-md text-50 transition-ease-in-out delay-0 hover:transform hover:scale-125  duration-500" to="./pages/sport"><span className="m-2">Sports</span></Link>
               </div>
               <div className="flex flex-col m-5 sm:m-0 lg:mr-20 lg:ml-20"> 
                <Link className="m-5 border-4 rounded-md text-50 transition-ease-in-out delay-0 hover:transform hover:scale-125  duration-500" to="./pages/athlete"><span className="m-2">Athletes</span></Link>
               </div>
               <div className="flex flex-col m-5 sm:m-0"> 
                <Link className="m-5 border-4 rounded-md text-50 transition-ease-in-out delay-0 hover:transform hover:scale-125  duration-500" to="./pages/coach"><span className="m-2">Coaches</span></Link>
               </div>
             </div>
          
        </div>
     );
}
 
export default Home;