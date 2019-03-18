package AssignmentRecursion;

public class RecursionPartIII {

	static int[] intArray = null;
	static String s;
	static int ctr;
	
	public static void pattern(int x, int y) {
		
		String s = "";
		if (x <= y) {
			
			for (int i = 0; i < x; i++) {
				s = s + "*";
			}
			
			System.out.println(s);
			pattern(x + 1, y);
			System.out.println(s);
		}
		
	}
	
	public static void level(String title, int levels) {
		
		if (levels >= 10 || levels < 1) {
			System.out.println("'LEVELS' ARGUMENT MUST BE GREATER THAN OR EQUAL TO 1!");
			System.out.println("'LEVELS' ARGUMENT MUST NOT BE GREATER THAN OR EQUAL TO 10!");
			return;
		}
		// s = title + ".";
		s = title;
		
		if (intArray == null) { // Initializes the array.
		intArray = new int[levels];
		}
		
		for (int i = 0; i < levels; i++) { // Sets every index within the array to 1 for the freshly needed array..
			if (intArray[i] == 0) {
				intArray[i] = 1;
			}
			else {
				break;
			}
			intArray[levels - 1] = 0;
		}
		
		intArray[levels - 1] += 1; // Increments the last index by 1.
		
		for (int i = 0; i < levels; i++) { // Carries over increments to other indexes.
			if (i < 0) {
				i ++;
				// continue;
			}
			else if (intArray[0] >= 10) {
				break;
			}
		    else if (intArray[i] == 10) {
				intArray[i - 1] += 1;
				intArray[i] = 1;
				i = i - 2;
			}
		}
		
		for (int i = 0; i < levels; i++) { // Forming the string for printing to the console.
			s = s + intArray[i] + ".";
		}
		
		
		if (intArray[0] >= 10) { // If the first index reaches 10 or more, this will stop the execution.
			intArray = null;
			s = "";
			return;
		}
		
		System.out.println(s);
		level(title, levels);
	}
	
}
