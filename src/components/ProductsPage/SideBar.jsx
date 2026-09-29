import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function SideBar() {
  return (
    <aside className="w-full border border-secondary rounded-lg p-5 h-fit">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <Accordion type="multiple" className="mb-20">
        <AccordionItem value="price">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              <label><input type="checkbox" className="mr-2" />$0 - $100</label>
              <label><input type="checkbox" className="mr-2" />$100 - $200</label>
              <label><input type="checkbox" className="mr-2" />$200 - $300</label>
              <label><input type="checkbox" className="mr-2" />$300 - $400</label>
              <label><input type="checkbox" className="mr-2" />$400+</label>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="category">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              <label><input type="checkbox" className="mr-2" />Women</label>
              <label><input type="checkbox" className="mr-2" />Men</label>
              <label><input type="checkbox" className="mr-2" />Kids</label>
              <label><input type="checkbox" className="mr-2" />Footwear</label>
              <label><input type="checkbox" className="mr-2" />Accessories</label>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brand">
          <AccordionTrigger>Brand</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              <label><input type="checkbox" className="mr-2" />Bershka</label>
              <label><input type="checkbox" className="mr-2" />H&M</label>
              <label><input type="checkbox" className="mr-2" />Zara</label>
              <label><input type="checkbox" className="mr-2" />Koton</label>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="collection">
          <AccordionTrigger>Collection</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              <label><input type="checkbox" className="mr-2" />Spring/Summer</label>
              <label><input type="checkbox" className="mr-2" />Autumn/Winter</label>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="color">
          <AccordionTrigger>Color</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              <label><input type="checkbox" className="mr-2" />Black</label>
              <label><input type="checkbox" className="mr-2" />White</label>
              <label><input type="checkbox" className="mr-2" />Red</label>
              <label><input type="checkbox" className="mr-2" />Beige</label>
              <label><input type="checkbox" className="mr-2" />Grey</label>
              <label><input type="checkbox" className="mr-2" />Green</label>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="others">
          <AccordionTrigger>Others</AccordionTrigger>
        </AccordionItem>
      </Accordion>
      <button className="btn-dark w-full mt-6">
        Apply Filters
      </button>
    </aside>
  );
}

export default SideBar;