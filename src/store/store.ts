import {create} from 'zustand'
import type { DraftPatient, Patient } from '../types'
import {v4 as uuidv4} from 'uuid'
import { createJSONStorage, persist } from 'zustand/middleware'

type PatientState = {

    patients: Patient[]
    addPatient:(data: DraftPatient) => void
    deletePatient:(id: Patient['id'])=> void
    editingId : Patient['id']
    addEditingId : (id: Patient['id'])=> void
    getEditingId : (id: Patient['id']) => Patient[]

}

const createPatient=(data:DraftPatient):Patient=>{

    return {

        ...data,
        id: uuidv4()

    }

}

export const usePatientStore = create<PatientState>()(
    persist((set,get)=>({

            patients : [],
            addPatient:(data)=>{
                
                
                set((state)=>({
                    patients: state.editingId 
                    ? state.patients.map((patient)=>{
                            if(patient.id=== state.editingId){
                                return{
                                    ...patient,
                                    ...data
                                }
                            }
                            return patient
                        })

                    :[...state.patients,createPatient(data)],
                    editingId:''
                }))

            },
            deletePatient:(id)=>{

                set((state)=>({

                    patients: state.patients.filter(patient => patient.id !== id),
                    editingId: '',

                }))

            },
            editingId:'',
            addEditingId:(id)=>{
                
                set((state)=>({

                    editingId: id

                }))

            },
            getEditingId:(id)  => {
                
                return get().patients.filter(patient=>patient.id === id)


            },
        }),{
            name:'patient-storage'
        })
     
)


