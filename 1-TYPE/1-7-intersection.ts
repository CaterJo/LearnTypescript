{
  /**
   * Intersction Types: &
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeid: number;
    work: () => void;
  };

  const internWork = (person: Student & Worker) => {
    console.log(person.name, person.empolyeeid, person.work());
  };
}
