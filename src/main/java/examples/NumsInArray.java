package examples;

public class NumsInArray {

	public static void main(String[] args) {
		int[] a = { 1, 3, 4, 7, 8, 90, 99, 96, 10 };
		
		//method #1
		for (int i = 0; i < a.length; i++) {
			for (int j = 1; j < a.length; j++) {
				if (i < j) {
					if (a[i] + a[j] == 100) {
						System.out.println(a[i] + " + " + a[j] + "= 100");
					}
				}
			}
		}

		//method #2
		for (int i = 0; i < a.length; i++) {
			for (int j = i + 1; j < a.length; j++) {
				if (a[i] + a[j] == 100) {
					System.out.println(a[i] + " + " + a[j] + "= 100");
				}
			}
		}
	}

}
