package AssignmentRecursion;

public class Driver {

	public static void main(String[] args) {
		
		RecursionPartIII r = new RecursionPartIII();
		
		// Digits in the "title" recursive method are only allowed to be between 1 - 9 as stipulated in the assignment.
		// No values 10 or higher. No values of 0 or lower.
		
		r.pattern(1, 5);
		r.level("TITLE_", 2); // Underscores added for visibility.
		r.pattern(1, 9);
		r.level("SECOND_TITLE_", 3); // Underscores added for visibility.
		r.pattern(1, 4);
		// r.level("TITLE_III", 5);
		// r.level("TITLE_III", 6);

	}

}
