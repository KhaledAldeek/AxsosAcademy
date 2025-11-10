public interface HIPAACompliantUser {
	public abstract boolean assignPin(int pin);
    public abstract boolean accessAuthorized(Integer confirmedAuthID);

}
