// Update Objects
const [drink, setDrink] = useState({
  title: "Americano",
  price: 5,
});

setDrink({ ...drink, price: 2 });

// Update Nested Objects
const [customer, setCustomer] = useState({
  name: "John",
  address: {
    city: "San Francisco",
    zipCode: 94111,
  },
});

setCustomer({ ...customer, address: { ...customer.address, zipCode: 94112 } });
// Updating Array
const [tags, setTags] = useState(["a", "b"]);
// Adding
setTags([...tags, "c"]);

// Removing
setTags(tags.filter((tag) => tag !== "a"));

// Updating
setTags(tags.map((tag) => (tag === "a" ? "A" : tag)));

// Updating Array Of Objects
const [bugs, setBugs] = useState([
  { id: 1, title: "Bug 1", fixed: false },
  { id: 2, title: "Bug 2", fixed: false },
]);

setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
