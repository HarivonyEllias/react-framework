import AuditHeader from "./AuditHeader"
import ApexChart from "./DonutChart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function AuditLayout() {
    return (
        <div>
            <AuditHeader/> <br /> <br />
            <div>
                <div className="text-3xl font-bold text-start mb-8 ml-2">
                    Chiffre clés
                 </div>
                 <div className="flex flex-column">
                    <ApexChart/>
                    <div className="flex justify-center items-center text-xl font-bold mb-8 ml-2">
                        Invéstissement média
                    </div>
                 </div>
            </div> <br />
            <div>
                 <div className="flex flex-column">
                    <ApexChart/>
                    <div className="flex justify-center items-center text-xl font-bold mb-8 ml-2">
                        Ce que représente les 10 <br /> annonceurs topspenders
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default AuditLayout;