typealias function = (Any) -> Any
precedencegroup PipelinePrecedence {
	lowerThan: AdditionPrecedence
	associativity: left
	assignment: true
}
precedencegroup ExponentiationPrecedence {
	higherThan: MultiplicationPrecedence
	lowerThan: BitwiseShiftPrecedence
	associativity: left
	assignment: true
}
postfix operator ++
postfix operator --
infix operator ** : ExponentiationPrecedence
infix operator +-: AdditionPrecedence
infix operator |>: PipelinePrecedence
func ** (left: Double, right: Double) -> Double {
	var total = 1.0
	for _ in 1...Int(right) {
		total *= left
	}
	return total
}
func +- (left: Double, right: Double) -> (Double, Double){
	return (left + right, left - right)
}
postfix func ++ (num: inout Double) {
	num += 1.0
}
postfix func -- (num: inout Double) {
	num -= 1.0
}
func |> (left: Any, right: function) -> Any {
	return right(left)
}
func Print (_ single: Any) {
	print(single)
}
var result = 3 ** 2 +- 1
result |> Print