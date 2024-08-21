# useryze-assignment
 A/B Testing Scenario on Product Cards using React + TypeScript + Redux

## Overview

This project demonstrates an A/B testing setup using React, Redux, and Redux-Persist. The main feature is to show different versions of product cards (`Version A` and `Version B`) based on user assignment. The version assignment can be controlled via a configuration file, and the assigned version persists across sessions using `redux-persist`.

## Features

- **A/B Testing**: Randomly assigns a user to either Version A or Version B of the product card. This assignment is persisted using `redux-persist`.
- **Configuration-Based Version Assignment**: Allows setting a default version via a configuration file (`config.json`). If the default version is not provided, the version is assigned randomly.
- **Product Card Design**: Two versions of the product card are available:
  - **Version A**: A basic product card with standard design.
  - **Version B**: An enhanced product card with additional UX features, including a discount price display.
- **State Persistence**: The state (assigned version) persists across user sessions, ensuring consistent experience.

## Approach

### Initial Setup

1. **Configuration File**: 
   - A `config.json` file is used to define a `defaultVersion`. If this value is provided, it is used to set the version for all users. 
   - If no `defaultVersion` is provided, the version is assigned randomly (50% chance for either "A" or "B").

2. **Redux Slice**:
   - The Redux slice (`versionSlice.ts`) manages the version state. 
   - The `setVersion` reducer checks if a version has been set. If not, it either assigns the `defaultVersion` or randomly selects between "A" and "B".

3. **State Persistence**:
   - The version state is persisted using `redux-persist` so that the assigned version remains consistent across page reloads or user sessions.

### Trade-offs

- **Random Assignment**: Randomly assigning versions ensures that both versions are tested equally. However, if a specific version is desired, it must be set via the `config.json` file.
- **Static Configuration**: Using a `config.json` file makes it easy to manage the version settings. However, this method does not support dynamic updates without restarting the application.

### Enhancements

- **Discount Price Display**: Version B includes an additional feature where the price is displayed with a discount, showing both the original and new prices. This is an optional UX enhancement to make the product more appealing.

## Running the Project Locally

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/ab-testing-redux.git
   cd ab-testing-redux

