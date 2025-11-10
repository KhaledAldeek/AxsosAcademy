import java.util.ArrayList;
import java.util.Date;

public class Physician extends User implements HIPAACompliantUser {
    private ArrayList<String> patientNotes;


    // TO DO: Constructor that takes an IDcopy


    public Physician(int idCopy) {
//        setId(idCopy);
        id = idCopy;
        patientNotes = new ArrayList<>();
    }

    // TO DO: Implement HIPAACompliantUser!

    public void newPatientNotes(String notes, String patientName, Date date) {
        String report = String.format(
                "Datetime Submitted: %s \n", date);
        report += String.format("Reported By ID: %s\n", this.id);
        report += String.format("Patient Name: %s\n", patientName);
        report += String.format("Notes: %s \n", notes);
        this.patientNotes.add(report);
    }

//    @Override  //abstract ......
    public boolean assignPin(int pin) {  
        if (String.valueOf(pin).length() == 4) {
            super.setPin(pin);
            return true;
        } else {
            return false;
        }
    }

//    @Override
    public boolean accessAuthorized(Integer confirmedAuthID) {
        if(confirmedAuthID.equals(id)){
            return true;
        }
        return false;
    }

    public void addNote(String note){
        this.patientNotes.add(note);
    }

    // TO DO: Setters & Getters

    public ArrayList<String> getPatientNotes() {
        return patientNotes;
    }

    public void setPatientNotes(ArrayList<String> patientNotes) {
        this.patientNotes = patientNotes;
    }
}
