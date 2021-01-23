{
    /**
     * Enum
     * 
     */
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY":1})


    enum Days {
        Monday,  // 0
        Tuesday, // 1
        Wendeday,// 2
        Thursday,
    }

    // 0
    console.log(Days.Monday)


    /**
     * 타입스크립트에서 enum 사용을 지양하는 이유
     * enum대신 Union Type을 쓰자.
     */
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  
}