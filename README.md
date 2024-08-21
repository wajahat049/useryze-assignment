# useryze-assignment

A/B Testing Scenario on Product Cards using React + TypeScript + Redux

## Overview

This project demonstrates an A/B testing setup using React, TypeScript, Redux and Redux-Persist. The main feature is to show different versions of product cards i.e `Version A` and `Version B` based on user assignment. The version is assigned randomly and can also be controlled via a configuration file, and the assigned version persists.

## Features

- **A/B Testing**: Randomly assigns a user to either Version A or Version B of the product card. This assignment is persisted using `redux-persist`.
- **Configuration-Based Version Assignment**: Allows setting a default version via a configuration file (`config.json`).
- **Product Card Design**: Two versions of the product card are available:
  - **Version A**: A basic product card with standard design.
  - **Version B**: An enhanced product card with additional UX features, including a discount price display.
- **State Persistence**: The state (assigned version) persists across user sessions, ensuring consistent experience.

## Approach

1. **Configuration File**:

   - A `config.json` file is used to define a `defaultVersion`. If this value is provided, it is used to set the version for all users.
   - If no `defaultVersion` is provided, the version is assigned randomly (50% chance for either "A" or "B").

2. **Redux Slice**:

   - The Redux slice (`versionSlice.ts`) manages the version state.
   - The `setVersion` reducer checks if a version has been set. If not, it either assigns the `defaultVersion` or randomly selects between "A" and "B".

3. **State Persistence**:

   - The version state is persisted using `redux-persist` so that the assigned version remains consistent across page reloads or user sessions.

4. **Product Card UI/UX**:
   - Two versions of the product card are developed one with bad UI/UX and one with good UI/UX.

### Version B Improvements over Version A

2. **Layout**:Version B has a nice good looking display of product cards in a nice layout which persists the customers to stay at the website.
1. **Image**: Version B image responds with mouse hover and has soft round corners which improves the UI.
1. **Ratings**: Version B represents product ratings which can gain customer trust and can result in increased conversion rate.
1. **Discount Price**: Version B and Version A prices are same but Version B allows more customer to consider buying customers using discounted price technique.
1. **Prominent Button**: Version B has a prominent large Add to Cart Button with nice color to attract more audiences.
1. **Stock Information**: Version B displays stock levels that can create urgency to buy among the customers.

### Trade-offs

- **Direct Manual Configuration**: Using a `config.json` file makes it easy to manage the version settings. However, this method does not support dynamic updates without changing in project directly.It can be more effectively achieved using an Admin Panel.

### Enhancements

- **Dynamic toggle**: Using a `config.json` file makes it easy to manage the version settings. If this value is provided, it is used to set the version for all users. Possible values are null, "A" and "B".

## Running the Project Locally

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/wajahat049/useryze-assignment.git
   cd useryze-assignment
   ```

2. **Install Dependencies**:

   ```
   npm install or yarn install
   ```

3. **Run Project Locally**:
   ```
   npm run dev or yarn run dev
   ```
