import { usePatientStore } from "../store/store"
import type { Patient } from "../types"

type PatientDetailsProps={

    patient: Patient

}

export default function PatientDetails({patient}:PatientDetailsProps) {

    const deletePatient = usePatientStore(state=>state.deletePatient)
    const editingPatient = usePatientStore(state=>state.addEditingId)

    return (
        <div className=" mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            
            <p className=" font-bold mb-3 text-gray-700 uppercase">
                ID:<span className="font-normal normal-case"> {patient.id}</span>
            </p>

            <p className=" font-bold mb-3 text-gray-700 uppercase">
                Nombre:<span className="font-normal normal-case"> {patient.name}</span>
            </p>

            <p className=" font-bold mb-3 text-gray-700 uppercase">
                Propietario:<span className="font-normal normal-case"> {patient.caretaker}</span>
            </p>

            <p className=" font-bold mb-3 text-gray-700 uppercase">
                Email:<span className="font-normal normal-case"> {patient.email}</span>
            </p>

            <p className=" font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta:<span className="font-normal normal-case"> {patient.date.toString()}</span>
            </p>

            <p className=" font-bold mb-3 text-gray-700 uppercase">
                Sintomas:<span className="font-normal normal-case"> {patient.symptoms}</span>
            </p>

            <div className=" flex justify-between gap-3 mt-10">

                <button 
                    className="p-3 rounded-lg bg-red-600 text-white uppercase font-bold cursor-pointer"

                    onClick={()=>deletePatient(patient.id)}

                >
                    Eliminar
                </button>

                <button 
                    className=" p-3 rounded-lg bg-indigo-600 text-white uppercase font-bold cursor-pointer"
                    onClick={()=>editingPatient(patient.id)}
                >
                    Editar
                </button>

            </div>

        </div>
    )
}
