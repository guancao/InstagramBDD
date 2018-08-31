package examples;

public class RevStr {

	public static void main(String[] args) {
		String str = "hope you are doing well";
		String revStr ="";
		for (int i=0; i<str.length(); i++) {
			revStr +=str.charAt(str.length()-1-i);
		}
		System.out.println("The reverse string is ::::"+ revStr);
	}
	
	//method #2
//	StringBuffer strB = new StringBuffer(str);
	

}
