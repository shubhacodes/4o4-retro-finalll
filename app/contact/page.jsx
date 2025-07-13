"use client";
import { useState } from "react";
import { StandardCTAButton } from "@/components/round/cta-test";
import useSound from "@/hooks/use-sound";
import Link from "next/link";

export default function ContactPage() {
  const { playClick } = useSound();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    companySize: "",
    projectType: "",
    budget: "",
    projectTimeline: "",
    preferredRoles: [],
    hearAboutUs: "",
    location: "",
    files: null,
    additionalComments: "",
    privacyConsent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const companySizes = [
    "Just me (solo entrepreneur)",
    "2-10 rebels",
    "11-50 creative minds",
    "51-200 game changers",
    "201-500 rule breakers",
    "500+ industry disruptors",
  ];

  const projectTypes = [
    "Brand Identity (full transformation)",
    "Web Design (digital presence)",
    "Digital Marketing (audience magnetism)",
    "E-commerce (conversion machine)",
    "Mobile App (pocket-sized magic)",
    "Full Rebrand (phoenix rising)",
    "Something totally different",
  ];

  const budgetRanges = [
    "Under $10,000 (scrappy startup)",
    "$10,000 - $25,000 (getting serious)",
    "$25,000 - $50,000 (ready to invest)",
    "$50,000 - $100,000 (going big)",
    "$100,000+ (sky's the limit)",
  ];

  const timelines = [
    "Yesterday (we live dangerously)",
    "1-2 months (fast track)",
    "3-6 months (steady build)",
    "6-12 months (masterpiece mode)",
    "1+ years (epic journey)",
  ];

  const roles = [
    "Creative Director (the visionary)",
    "Brand Strategist (the mastermind)",
    "Web Developer (the architect)",
    "UX/UI Designer (the artist)",
    "Marketing Manager (the amplifier)",
    "Project Manager (the conductor)",
  ];

  const hearAboutOptions = [
    "Google Search (found us organically)",
    "Social Media (saw our chaos)",
    "Referral (someone spilled the tea)",
    "Previous Client (you know our magic)",
    "Industry Event (we made an impression)",
    "Cosmic alignment (it was destiny)",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "preferredRoles") {
        const updatedRoles = checked
          ? [...formData.preferredRoles, value]
          : formData.preferredRoles.filter((role) => role !== value);
        setFormData((prev) => ({ ...prev, preferredRoles: updatedRoles }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, files }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "We need something to call you";
    if (!formData.email.trim()) newErrors.email = "How else will we reach you?";
    if (!formData.companyName.trim())
      newErrors.companyName = "What empire are we building for?";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Sometimes we need to actually talk";
    if (!formData.companySize)
      newErrors.companySize = "Size matters (for planning purposes)";
    if (!formData.projectType)
      newErrors.projectType = "What kind of magic are we making?";
    if (!formData.budget)
      newErrors.budget = "Money talks, but what's it saying?";
    if (!formData.projectTimeline)
      newErrors.projectTimeline = "When do we start this adventure?";
    if (formData.preferredRoles.length === 0)
      newErrors.preferredRoles = "Pick your dream team";
    if (!formData.hearAboutUs)
      newErrors.hearAboutUs = "How did you find us beautiful souls?";
    if (!formData.location.trim())
      newErrors.location = "Where in the world are you?";
    if (!formData.privacyConsent)
      newErrors.privacyConsent = "We need your blessing to proceed";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    playClick();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert(
        "🎉 Message received! We'll be in touch faster than you can say 'double-take'."
      );

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        phoneNumber: "",
        companySize: "",
        projectType: "",
        budget: "",
        projectTimeline: "",
        preferredRoles: [],
        hearAboutUs: "",
        location: "",
        files: null,
        additionalComments: "",
        privacyConsent: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Oops! Something went sideways. Mind trying again?");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#231F20] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-block mb-6 text-[#FFB600] hover:text-white transition-colors"
            onClick={playClick}
          >
            <span className="font-oswald text-lg">← BACK TO MAYHEM</span>
          </Link>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-oswald text-[#FAF9F5] mb-4">
            LET'S DO THIS
          </h1>
          <p className="text-lg font-space-grotesk text-[#FAF9F5] opacity-90 max-w-2xl mx-auto">
            Whether you're a rising startup, a creative agency ready to expand,
            or anyone seeking a plug & play agency model, let's add some{" "}
            <span className="text-[#FFB600]">beautiful chaos</span> to your
            brand.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#F7F4E9] rounded-3xl border-4 border-black p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-xl font-bold font-oswald text-[#231F20] mb-3">
                What should we call you? <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-black rounded-2xl font-space-grotesk text-lg focus:outline-none focus:border-[#FFB600] transition-colors"
                placeholder="Your magnificent name here..."
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1 font-space-grotesk">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xl font-bold font-oswald text-[#231F20] mb-3">
                Where can we find you in the digital realm?{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-black rounded-2xl font-space-grotesk text-lg focus:outline-none focus:border-[#FFB600] transition-colors"
                placeholder="your.email@domain.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 font-space-grotesk">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-xl font-bold font-oswald text-[#231F20] mb-3">
                What empire are we building for?{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-black rounded-2xl font-space-grotesk text-lg focus:outline-none focus:border-[#FFB600] transition-colors"
                placeholder="Your company's legendary name"
              />
              {errors.companyName && (
                <p className="text-red-500 text-sm mt-1 font-space-grotesk">
                  {errors.companyName}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xl font-bold font-oswald text-[#231F20] mb-3">
                Sometimes we need to actually talk{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-black rounded-2xl font-space-grotesk text-lg focus:outline-none focus:border-[#FFB600] transition-colors"
                placeholder="+1 (555) 123-4567"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1 font-space-grotesk">
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            {/* Company Size */}
            <div>
              <label className="block text-xl font-bold font-oswald text-[#231F20] mb-3">
                How big is your crew? <span className="text-red-500">*</span>
              </label>
              <select
                name="companySize"
                value={formData.companySize}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-black rounded-2xl font-space-grotesk text-lg focus:outline-none focus:border-[#FFB600] transition-colors"
              >
                <option value="">Choose your squad size</option>
                {companySizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
              {errors.companySize && (
                <p className="text-red-500 text-sm mt-1 font-space-grotesk">
                  {errors.companySize}
                </p>
              )}
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-xl font-bold font-oswald text-[#231F20] mb-3">
                What kind of magic are we making?{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-black rounded-2xl font-space-grotesk text-lg focus:outline-none focus:border-[#FFB600] transition-colors"
              >
                <option value="">Pick your adventure</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.projectType && (
                <p className="text-red-500 text-sm mt-1 font-space-grotesk">
                  {errors.projectType}
                </p>
              )}
            </div>

            {/* Budget */}
            <div>
              <label className="block text-xl font-bold font-oswald text-[#231F20] mb-3">
                Money talks, but what's it saying?{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-black rounded-2xl font-space-grotesk text-lg focus:outline-none focus:border-[#FFB600] transition-colors"
              >
                <option value="">What's the investment level?</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
              {errors.budget && (
                <p className="text-red-500 text-sm mt-1 font-space-grotesk">
                  {errors.budget}
                </p>
              )}
            </div>

            {/* Project Timeline */}
            <div>
              <label className="block text-xl font-bold font-oswald text-[#231F20] mb-3">
                When do we start this adventure?{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                name="projectTimeline"
                value={formData.projectTimeline}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-black rounded-2xl font-space-grotesk text-lg focus:outline-none focus:border-[#FFB600] transition-colors"
              >
                <option value="">Choose your timeline</option>
                {timelines.map((timeline) => (
                  <option key={timeline} value={timeline}>
                    {timeline}
                  </option>
                ))}
              </select>
              {errors.projectTimeline && (
                <p className="text-red-500 text-sm mt-1 font-space-grotesk">
                  {errors.projectTimeline}
                </p>
              )}
            </div>

            {/* Preferred Roles */}
            <div>
              <label className="block text-xl font-bold font-oswald text-[#231F20] mb-3">
                Pick your dream team <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {roles.map((role) => (
                  <label
                    key={role}
                    className="flex items-center space-x-3 cursor-pointer bg-white rounded-xl p-3 border-2 border-transparent hover:border-[#FFB600] transition-colors"
                  >
                    <input
                      type="checkbox"
                      name="preferredRoles"
                      value={role}
                      checked={formData.preferredRoles.includes(role)}
                      onChange={handleInputChange}
                      className="w-5 h-5 border-2 border-black rounded"
                    />
                    <span className="font-space-grotesk text-[#231F20]">
                      {role}
                    </span>
                  </label>
                ))}
              </div>
              {errors.preferredRoles && (
                <p className="text-red-500 text-sm mt-1 font-space-grotesk">
                  {errors.preferredRoles}
                </p>
              )}
            </div>

            {/* How did you hear about us */}
            <div>
              <label className="block text-xl font-bold font-oswald text-[#231F20] mb-3">
                How did you find us beautiful souls?{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                name="hearAboutUs"
                value={formData.hearAboutUs}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-black rounded-2xl font-space-grotesk text-lg focus:outline-none focus:border-[#FFB600] transition-colors"
              >
                <option value="">How'd you discover us?</option>
                {hearAboutOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.hearAboutUs && (
                <p className="text-red-500 text-sm mt-1 font-space-grotesk">
                  {errors.hearAboutUs}
                </p>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="block text-xl font-bold font-oswald text-[#231F20] mb-3">
                Where in the world are you?{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-black rounded-2xl font-space-grotesk text-lg focus:outline-none focus:border-[#FFB600] transition-colors"
                placeholder="Your corner of the universe"
              />
              {errors.location && (
                <p className="text-red-500 text-sm mt-1 font-space-grotesk">
                  {errors.location}
                </p>
              )}
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-xl font-bold font-oswald text-[#231F20] mb-3">
                Got any inspiration to share?
              </label>
              <div className="border-2 border-dashed border-black rounded-3xl p-8 text-center bg-white hover:bg-gray-50 transition-colors">
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="fileUpload"
                />
                <label htmlFor="fileUpload" className="cursor-pointer">
                  <div className="space-y-2">
                    <p className="font-space-grotesk text-lg text-[#231F20]">
                      {formData.files
                        ? `${formData.files.length} file(s) locked and loaded`
                        : "No files yet"}
                    </p>
                    <p className="font-space-grotesk text-base text-gray-600">
                      Click to choose files or drag them here
                    </p>
                    <p className="font-space-grotesk text-sm text-gray-500">
                      Max size: 10 MB per file
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Additional Comments */}
            <div>
              <label className="block text-xl font-bold font-oswald text-[#231F20] mb-3">
                Anything else we should know?
              </label>
              <textarea
                name="additionalComments"
                value={formData.additionalComments}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 border-2 border-black rounded-2xl font-space-grotesk text-lg focus:outline-none focus:border-[#FFB600] transition-colors resize-none"
                placeholder="Share your wildest dreams, specific requirements, or just say hi..."
              />
            </div>

            {/* Privacy Consent */}
            <div>
              <label className="flex items-start space-x-3 cursor-pointer bg-white rounded-xl p-4 border-2 border-transparent hover:border-[#FFB600] transition-colors">
                <input
                  type="checkbox"
                  name="privacyConsent"
                  checked={formData.privacyConsent}
                  onChange={handleInputChange}
                  className="w-5 h-5 border-2 border-black mt-1"
                />
                <span className="font-space-grotesk text-[#231F20]">
                  I consent to the privacy and data handling policies (we
                  promise not to do anything weird with your info){" "}
                  <span className="text-red-500">*</span>
                </span>
              </label>
              {errors.privacyConsent && (
                <p className="text-red-500 text-sm mt-1 font-space-grotesk">
                  {errors.privacyConsent}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-6 flex justify-center">
              <StandardCTAButton
                size="large"
                rounded={true}
                onClick={handleSubmit}
                className={isSubmitting ? "opacity-50 cursor-not-allowed" : ""}
              >
                {isSubmitting ? "SENDING MAGIC..." : "SUBMIT & START THE CHAOS"}
              </StandardCTAButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
