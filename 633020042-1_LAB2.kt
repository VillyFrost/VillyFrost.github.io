// ข้อ ๑
fun task1(){
  println("*** Program calculate BMI ***")
  print("Weight (kg) : ")
  val weight: Double = readLine()!!.toDouble()
  print("Height (cm) : ")
  val height: Double = readLine()!!.toDouble()
  val bmi:Double = weight/height/height*10000

  val answer: String = 
  if(bmi <= 18.5){
    "Underweight"
  }else if(bmi in 18.51..23.40){
    "Normal weight"
  }else if(bmi in 23.41..28.40){
    "Overweight"
  }else if(bmi in 28.41..34.90){
    "Obesity 1"
  }else if(bmi in 34.91..39.90){
    "Obesity 2"
  }else{
    "Obesity max"
  }

  println("Answer = $answer")
  println("*** End program calculate BMI ***")
}

//  ข้อ ๒
 fun task2(){
   print("Please input number : ")
   var num :Int = readLine()!!.toInt()
   for (i:Int in 1..12){
     var res: Int = num*i
     println("$num x $i = $res")
   }
 }

 fun main(){
   task2()
 }
