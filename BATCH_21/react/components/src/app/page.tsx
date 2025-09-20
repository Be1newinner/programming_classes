export default function Home() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
        return (
          <div
            key={item}
            className="bg-red-500 w-50 h-50 rounded-[500rem] flex items-center justify-center"
          >
            <span>Something</span>
          </div>
        );
      })} */}
      {/* {SomethingCircle()}
      {SomethingCircle()}
      {SomethingCircle()}
      {SomethingCircle()}
      {SomethingCircle()}
      {SomethingCircle()} */}

      {/* <SomethingCircle dasdsadasd={"Vijay1"} asd={4} />
      <SomethingCircle dasdsadasd={"Vijay2"} asd={4} />
      <SomethingCircle dasdsadasd={"Vijay3"} asd={4} />
      <SomethingCircle dasdsadasd={"Vijay4"} asd={4} /> */}

      {Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        title: (index % 2 == 0 ? "Vijay" : "Ajay") + (index + 1),
      })).map((item) => {
        return (
          <SomethingCircle
            key={item.id}
            dasdsadasd={item.title}
            asd={item.id}
          />
        );
      })}
    </div>
  );
}

// Html code me javascript inject krne k liye {} use krenge
// javascript me html use krne k liye return keyword

// Component
// condition of component
// a. function name should be in PascalCase
// b. This will return html component
function SomethingCircle({
  dasdsadasd,
  asd,
}: {
  dasdsadasd: string;
  asd: number;
}) {
  return (
    <div className="bg-red-500 w-50 h-50 rounded-[50%] flex items-center justify-center">
      <span>{dasdsadasd}</span>
      {/* <span>{asd}</span> */}
    </div>
  );
}
