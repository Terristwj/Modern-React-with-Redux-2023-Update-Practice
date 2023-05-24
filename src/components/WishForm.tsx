import { ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { changeName, changeCost, addWish } from "../store/index";

function WishForm(): JSX.Element {
  const dispatch = useDispatch();
  const { name, cost }: { name: string; cost: number } = useSelector(
    (state: any) => {
      return {
        name: state.form.name,
        cost: state.form.cost,
      };
    }
  );

  function handleNameChange(event: ChangeEvent<HTMLInputElement>): void {
    dispatch(changeName(event.target.value));
  }
  function handleCostChange(event: ChangeEvent<HTMLInputElement>): void {
    const wishCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(wishCost));
  }
  function handleSubmit(event: FormEvent): void {
    event.preventDefault();
    dispatch(addWish({ name: name, cost: cost }));
  }

  return (
    <div className="wish-form panel">
      <h4 className="subtitle is-3">Add Wish</h4>

      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
        </div>

        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default WishForm;
