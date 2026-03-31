
func isPalindrome(s string) bool {
    var clear string

    for _, v := range s{
        isAlpha := ('a' <= v && v <= 'z') || ('A' <= v && v <= 'Z')
        isDigit := v >= '0' && v <= '9'
        if isAlpha || isDigit {
            clear = clear + string(v)
        }
    }

    fmt.Println("clear: ", clear)
    clear = strings.ToLower(clear)
    var i int = 0;
    var j int = len([]rune(clear)) - 1

    for i < j {
        fmt.Println("clear[i]: ", clear[i], "clear[j]: ", clear[j])
        if clear[i] == clear[j] {
            i++
            j--
        }else {
            return false
        }
    }
    return true
}
