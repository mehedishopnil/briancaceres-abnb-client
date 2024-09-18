import Swal from "sweetalert2";

const CreateNewList = () => {
  const handleAddProduct = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const description = form.description.value;
    const location = form.location.value;
    const image = form.image.value;

    const formData = {
      name,
      description,
      location,
      image,
    };

    // Function to generate random earnings data
    const generateRandomEarnings = () => {
      return {
        2023: parseFloat((Math.random() * (2600 - 2400) + 2400).toFixed(2)), // Earnings between 2400 and 2600
        2024: parseFloat((Math.random() * (2800 - 2600) + 2600).toFixed(2)), // Earnings between 2600 and 2800
      };
    };

    const earningsData = {
      name, // Using the same name from the form
      earnings: generateRandomEarnings(),
      category: "vacation",
    };

    try {
      // First request to send form data to /all-hotels-list
      const response1 = await fetch(
        "https://briancaceres-abnb-server.vercel.app/all-hotels-list",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // Second request to send earnings data to /all-earnings
      const response2 = await fetch(
        "https://briancaceres-abnb-server.vercel.app/all-earnings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(earningsData),
        }
      );

      if (response1.ok && response2.ok) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Form submitted successfully to both databases!",
        });
        form.reset(); // Reset the form after successful submission
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Form submission failed for one or both databases. Please try again.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while submitting the form.",
      });
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="card w-full max-w-lg shadow-2xl rounded-md bg-base-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Create New Entry</h1>
        
        <form onSubmit={handleAddProduct} className="space-y-6">
          {/* Name Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter the name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Description Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              placeholder="Enter a brief description"
              className="textarea textarea-bordered w-full h-24 resize-none"
              required
            ></textarea>
          </div>

          {/* Location Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Image URL Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="url"
              name="image"
              placeholder="Enter image URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary border-2 rounded w-full hover:bg-slate-200">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewList;
