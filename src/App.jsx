import React, { useState, useEffect, useRef } from "react";
import { LuTerminal } from "react-icons/lu";
import { FiServer } from "react-icons/fi";
import { MdMiscellaneousServices } from "react-icons/md";
import Terminal from "./Terminal";
import logo from "./assets/kubemongen.png"

function FreshdeskTicketPopup({ onClose, onCreateTicket }) {
	const [selectedAgent, setSelectedAgent] = useState("Select the Agent");
	const [selectedApplication, setSelectedApplication] = useState(
		"Select the Application",
	);
	const [errorMessage, setErrorMessage] = useState("");

	const handleCreateTicket = () => {
		if (
			selectedAgent === "Select the Agent" ||
			selectedApplication === "Select the Application"
		) {
			// Set error message if default option is selected
			setErrorMessage("Please choose correct agent and application to proceed");
			return; // Prevent form submission
		}

		// Pass selectedAgent and selectedApplication to the parent component
		onCreateTicket(selectedAgent, selectedApplication);
		// Close the popup
		onClose();
	};

	return (
		<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-25">
			<div className="bg-base-200 rounded-lg p-4 w-80 border">
				<div className="mb-4">
					<label htmlFor="agentSelect" className="block text-sm font-medium">
						Agent:
					</label>
					<select
						id="agentSelect"
						name="agent"
						className="select w-full mt-2 select-sm"
						value={selectedAgent}
						onChange={(e) => setSelectedAgent(e.target.value)}
					>
						<option value="Select the Agent">Select the Agent</option>
						<option value="Abuzar Hasanov">Abuzar Hasanov</option>
						<option value="Akbar Hasanov">Akbar Hasanov</option>
						<option value="Alish Mammadov">Alish Mammadov</option>
						<option value="Emin Allahverdiyev">Emin Allahverdiyev</option>
						<option value="Jamil Farzana">Jamil Farzana</option>
						<option value="Mirzabi Babayev">Mirzabi Babayev</option>
						<option value="Orkhan Zulfugarov">Orkhan Zulfugarov</option>
					</select>
				</div>
				<div className="mb-4">
					<label
						htmlFor="applicationSelect"
						className="block text-sm font-medium"
					>
						Application:
					</label>
					<select
						id="applicationSelect"
						name="application"
						className="mt-1 select w-full select-sm"
						value={selectedApplication}
						onChange={(e) => setSelectedApplication(e.target.value)}
					>
						<option value="Select the Application">
							Select the Application
						</option>
						<option value="System General">System General</option>
						<option value="Boxhill">Boxhill</option>
						<option value="Eigen Ingenuity">Eigen Ingenuity</option>
						<option value="Confluence">Confluence</option>
						<option value="InfluxDB">InfluxDB</option>
						<option value="ElasticSearch">ElasticSearch</option>
						<option value="Neo4j">Neo4j</option>
						<option value="PostgreSQL">PostgreSQL</option>
						<option value="Barrier Status Panel">Barrier Status Panel</option>
						<option value="POB">POB</option>
						<option value="Event Scanner">Event Scanner</option>
						<option value="Widea iWAT">Widea iWAT</option>
					</select>
				</div>
				{errorMessage && (
					<p className="text-red-500 text-xs mb-2">{errorMessage}</p>
				)}
				<div className="flex justify-end">
					<button
						type="button"
						className="btn btn-outline btn-accent btn-sm"
						onClick={handleCreateTicket}
					>
						Create
					</button>
					<button
						type="button"
						className="btn btn-outline btn-default ml-2 btn-sm"
						onClick={onClose}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
}

function FreshdeskNotePopup({ onClose, onNoteTicket }) {
	const [selectedTicketId, setSelectedTicketId] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleNoteTicket = () => {
		if (selectedTicketId === "") {
			// Set error message if default option is selected
			setErrorMessage("Please enter valid ticket number to proceed");
			return; // Prevent form submission
		}

		// Pass selectedTicketId to the parent component
		onNoteTicket(selectedTicketId);
		// Close the popup
		onClose();
	};

	return (
		<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-25">
			<div className="bg-base-200 rounded-lg p-4 w-80 border">
				<div className="mb-4">
					<label htmlFor="ticketIdSelect" className="block text-sm font-medium">
						Ticket Number:
					</label>
					<input
						id="ticketIdSelect"
						type="number"
						name="ticketId"
						className="mt-2 input input-bordered input-sm w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
						min="1"
						max="999999"
						value={selectedTicketId}
						onChange={(e) => setSelectedTicketId(e.target.value)}
					/>
				</div>
				{errorMessage && (
					<p className="text-red-500 text-xs mb-2">{errorMessage}</p>
				)}
				<div className="flex justify-end">
					<button
						type="button"
						className="btn btn-outline btn-accent btn-sm ml-2"
						onClick={handleNoteTicket}
					>
						Create
					</button>
					<button
						type="button"
						className="btn btn-outline btn-default btn-sm ml-2"
						onClick={onClose}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
}

function FreshdeskDumpPopup({ onClose, onDumpLogs }) {
	const [selectedTicketId, setSelectedTicketId] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleDumpLogs = () => {
		if (selectedTicketId === "") {
			// Set error message if default option is selected
			setErrorMessage("Please enter valid ticket number to proceed");
			return; // Prevent form submission
		}

		// Pass selectedTicketId to the parent component
		onDumpLogs(selectedTicketId);
		// Close the popup
		onClose();
	};

	return (
		<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-25">
			<div className="bg-base-200 rounded-lg p-4 w-80 border">
				<div className="mb-4">
					<label htmlFor="ticketIdSelect" className="block text-sm font-medium">
						Ticket Number:
					</label>
					<input
						id="ticketIdSelect"
						type="number"
						name="ticketId"
						className="mt-2 input input-bordered input-sm w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
						min="1"
						max="999999"
						value={selectedTicketId}
						onChange={(e) => setSelectedTicketId(e.target.value)}
					/>
				</div>
				{errorMessage && (
					<p className="text-red-500 text-xs mb-2">{errorMessage}</p>
				)}
				<div className="flex justify-end">
					<button
						type="button"
						className="btn btn-outline btn-accent ml-2 btn-sm"
						onClick={handleDumpLogs}
					>
						Create
					</button>
					<button
						type="button"
						className="btn btn-outline btn-default btn-sm ml-2"
						onClick={onClose}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
}

function App() {
	const [apiData, setApiData] = useState(null);
	const [maxHostWidth, setMaxHostWidth] = useState(0);
	const [maxServiceWidth, setMaxServiceWidth] = useState(0);
	const [contextMenuVisible, setContextMenuVisible] = useState(false);
	const [contextMenuPosition, setContextMenuPosition] = useState({
		x: 0,
		y: 0,
	});
	const [contextApiHost, setContextApiHost] = useState("");
	const [contextApiService, setContextApiService] = useState("");
	const [showFreshdeskTicketPopup, setShowFreshdeskTicketPopup] =
		useState(false);
	const [showFreshdeskNotePopup, setShowFreshdeskNotePopup] = useState(false);
	const [showFreshdeskDumpPopup, setShowFreshdeskDumpPopup] = useState(false);
	const [terminalVisible, setTerminalVisible] = useState(false);

	const toggleTerminalVisibility = () => {
		setTerminalVisible(!terminalVisible);
	};

	// Reference to the context menu to check if click occurred inside or outside
	const contextMenuRef = useRef(null);

	useEffect(() => {
		// Event listener for mouse down to handle clicks outside context menu
		const handleClickOutside = (event) => {
			if (
				contextMenuRef.current &&
				!contextMenuRef.current.contains(event.target)
			) {
				setContextMenuVisible(false);
			}
		};

		// Event listener for ESC key to close context menu
		const handleEscKeyPress = (event) => {
			if (event.keyCode === 27) {
				setContextMenuVisible(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("keydown", handleEscKeyPress);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("keydown", handleEscKeyPress);
		};
	}, []);

	useEffect(() => {
		fetch("http://kube.veagy.one:14502/api/proxy", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({}),
		})
			.then((response) => response.json())
			.then((data) => {
				const sortedData = data.sort((a, b) =>
					a.host_display_name.localeCompare(b.host_display_name),
				);
				setApiData(sortedData);

				let maxHostWidth = 0;
				let maxServiceWidth = 0;
				for (const item of sortedData) {
					maxHostWidth = Math.max(
						maxHostWidth,
						item.host_display_name.length * 8,
					);
					maxServiceWidth = Math.max(
						maxServiceWidth,
						item.description.length * 8,
					);
				}
				setMaxHostWidth(maxHostWidth);
				setMaxServiceWidth(maxServiceWidth);
			})
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	const handleContextMenu = (e, index) => {
		e.preventDefault();

		// Calculate the adjusted Y coordinate considering the scroll position, menu height, and viewport height
		const windowHeight = window.innerHeight;
		const menuHeight = 265;
		const scrollTop = window.scrollY;
		const clientY = e.clientY;
		const viewportBottom = scrollTop + windowHeight;
		let adjustedY = clientY + scrollTop;

		// Check if adjusting for the menu height exceeds the viewport bottom
		if (adjustedY + menuHeight > viewportBottom) {
			// Adjust the Y position to keep the menu fully visible within the viewport
			adjustedY = Math.max(0, viewportBottom - menuHeight);
		}

		setContextMenuPosition({ x: e.clientX, y: adjustedY });
		setContextMenuVisible(true);

		// Update $context_api_host with the value of host_display_name from the API response of the hovered row
		const hoveredRowData = apiData[index];
		if (hoveredRowData) {
			setContextApiHost(hoveredRowData.host_display_name);
			setContextApiService(hoveredRowData.description);
		}
	};

	const closeContextMenu = () => {
		setContextMenuVisible(false);
	};

	const getStateText = (state) => {
		switch (state) {
			case 0:
				return {
					text: "OK",
					color: "#16A34A",
					badge: "badge border-[#16A34A] text-[#16A34A] badge-outline",
				};
			case 1:
				return {
					text: "WARNING",
					color: "#EAB308",
					badge: "badge border-[#EAB308] text-[#EAB308] badge-outline",
				};
			case 2:
				return {
					text: "CRITICAL",
					color: "#B91C1C",
					badge: "badge badge-error badge-outline",
				};
			case 3:
				return {
					text: "UNKNOWN",
					color: "#F97316",
					badge: "badge border-[#F97316] text-[#F97316] badge-outline",
				};
			default:
				return {
					text: "UNKNOWN",
					color: "#F97316",
					badge: "badge border-[#F97316] text-[#F97316] badge-outline",
				};
		}
	};

	const formatLastStateChange = (lastStateChange) => {
		const currentTimeGMT = new Date().getTime();
		const lastStateChangeDate = new Date(parseInt(lastStateChange) * 1000);
		const timeDifference = currentTimeGMT - lastStateChangeDate.getTime();
		const hours = Math.floor(timeDifference / (1000 * 60 * 60));
		const minutes = Math.floor(
			(timeDifference % (1000 * 60 * 60)) / (1000 * 60),
		);

		if (hours >= 24) {
			const days = Math.floor(hours / 24);
			return `${days}d ${hours % 24}h`;
		}
		return `${hours}h ${minutes}m`;
	};

	// Start of 1st context button
	// Action to see details of the alert
	const alertDetails = () => {
		// Generate the dynamic URL
		const alertUrl = `http://naemon.int.eigen.co/thruk/cgi-bin/extinfo.cgi?type=2&host=${contextApiHost}&service=${contextApiService}`;

		// Open the URL in a new browser window
		window.open(alertUrl, "_blank");
	}; // End of 1st context button

	// Start of 2nd context button
	// Action to create a Freshdesk ticket
	const createTicket = () => {
		// Open the Freshdesk ticket popup
		setShowFreshdeskTicketPopup(true);
	};

	const handleCreateTicket = (agent, application) => {
		const requestBody = {
			agent: agent,
			application: application,
			contextApiHost: contextApiHost,
			contextApiService: contextApiService,
		};

		fetch("http://kube.veagy.one:14502/execute-script/createTicket", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(requestBody),
		})
			.then((response) => response.text()) // Parse response as text
			.then((data) => {
				console.log("POST request successful");
				console.log("Response:", data); // Log the text response
				// Close the popup window after successful submission
				setShowFreshdeskTicketPopup(false);
			})
			.catch((error) => {
				console.error("Error making POST request:", error);
			});
	};

	// Close the Freshdesk ticket popup
	const closeFreshdeskTicketPopup = () => {
		setShowFreshdeskTicketPopup(false);
	}; // End of 2nd context button

	// Start of 3rd context button
	// Action to add note to a Freshdesk ticket
	const noteTicket = () => {
		// Open the note options popup
		setShowFreshdeskNotePopup(true);
	};

	const handleNoteTicket = (ticketId) => {
		const requestBody = {
			ticketId: ticketId,
			contextApiHost: contextApiHost,
			contextApiService: contextApiService,
		};

		fetch("http://kube.veagy.one:14502/execute-script/noteTicket", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(requestBody),
		})
			.then((response) => response.text()) // Parse response as text
			.then((data) => {
				console.log("POST request successful");
				console.log("Response:", data); // Log the text response
				// Close the popup window after successful submission
				setShowFreshdeskNotePopup(false);
			})
			.catch((error) => {
				console.error("Error making POST request:", error);
			});
	};

	// Close the note options popup
	const closeFreshdeskNotePopup = () => {
		setShowFreshdeskNotePopup(false);
	}; // End of 3rd context button

	// Start of 4th context button
	// Action to add note to a Freshdesk ticket
	const dumpLogs = () => {
		// Open the note options popup
		setShowFreshdeskDumpPopup(true);
	};

	const handleDumpLogs = (ticketId) => {
		const requestBody = {
			ticketId: ticketId,
			contextApiHost: contextApiHost,
			contextApiService: contextApiService,
		};

		fetch("http://kube.veagy.one:14502/execute-script/dumpLogs", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(requestBody),
		})
			.then((response) => response.text()) // Parse response as text
			.then((data) => {
				console.log("POST request successful");
				console.log("Response:", data); // Log the text response
				// Close the popup window after successful submission
				setShowFreshdeskNotePopup(false);
			})
			.catch((error) => {
				console.error("Error making POST request:", error);
			});
	};

	// Close the note options popup
	const closeFreshdeskDumpPopup = () => {
		setShowFreshdeskDumpPopup(false);
	}; // End of 4th context button

	// Start of 5th context button
	const viewLogs = () => {
		console.log("View logs button clicked!"); // Dummy console.log for testing
	};

	return (
		<div
			className="relative antialiased flex flex-col h-full"
			data-theme="white"
		>
			<Terminal
				isVisible={terminalVisible}
				toggleVisibility={toggleTerminalVisibility}
			/>
			{apiData ? (
				<div className="sticky flex justify-between py-4 px-6 top-0 z-40 w-full border-b text-white backdrop-blur-sm bg-gradient-to-r from-indigo-500/60 via-purple-500/60 to-pink-500/60 drop-shadow-md">
					<div className="text-2xl flex">
						<img src={logo} alt="Logo" className="h-8 inline-block mx-2" />
					</div>
					<div className="gap-2 flex">
						<a
							href="http://naemon.int.eigen.co/thruk/cgi-bin/status.cgi?hostgroup=all&style=hostdetail&hoststatustypes=12"
							target="_blank"
							rel="noreferrer"
						>
							<button type="button" data-theme="cupcake" className="btn btn-sm backdrop-blur-3xl border-0 bg-white/50">
								<FiServer />
								Hosts
							</button>
						</a>
						<a
							href="http://naemon.int.eigen.co/thruk/cgi-bin/status.cgi?host=all&servicestatustypes=28"
							target="_blank"
							rel="noreferrer"
						>
							<button type="button"data-theme="cupcake" className="btn btn-sm backdrop-blur-3xl border-0 bg-white/50">
								<MdMiscellaneousServices />
								Services
							</button>
						</a>
						<button
							type="button"
							data-theme="cupcake" className="btn btn-sm backdrop-blur-3xl border-0 bg-white/50"
							onClick={toggleTerminalVisibility}
						>
							<LuTerminal />
							Terminal
						</button>
					</div>
				</div>
			) : null}
			{apiData ? (
				<div className="p-2">
					<table className="table table-fixed w-full">
						<thead className="text-base">
							<tr>
								<th
									style={{ width: `${maxHostWidth}px`, whiteSpace: "nowrap" }}
								>
									Host
								</th>
								<th
									style={{
										width: `${maxServiceWidth}px`,
										whiteSpace: "nowrap",
									}}
								>
									Service
								</th>
								<th style={{ width: "100px", textAlign: "center" }}>Status</th>
								<th style={{ width: "100px", textAlign: "center" }}>Since</th>
								<th className="whitespace-nowrap overflow-hidden text-ellipsis">
									Description
								</th>
							</tr>
						</thead>
						<tbody>
							{apiData.map((item, index) => (
								<tr
									key={index}
									id={`row-${index}`}
									className="hover"
									onContextMenu={(e) => handleContextMenu(e, index)}
								>
									<td className="whitespace-nowrap">
										{item.host_display_name}
									</td>
									<td className="whitespace-nowrap">{item.description}</td>
									<td className="text-center justify-center flex">
										<div className={`${getStateText(item.state).badge} `}>
											{getStateText(item.state).text}
										</div>
									</td>
									<td className="text-center">
										{formatLastStateChange(item.last_state_change)}
									</td>
									<td
										style={{
											whiteSpace: "nowrap",
											overflow: "hidden",
											textOverflow: "ellipsis",
										}}
									>
										{item.plugin_output}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<div className="w-full h-screen flex justify-center items-center">
					<div className="rounded-full h-20 w-20 bg-violet-800 animate-ping" />
				</div>
			)}

			{showFreshdeskTicketPopup && (
				<FreshdeskTicketPopup
					onClose={closeFreshdeskTicketPopup}
					onCreateTicket={handleCreateTicket}
				/>
			)}
			{showFreshdeskNotePopup && (
				<FreshdeskNotePopup
					onClose={closeFreshdeskNotePopup}
					onNoteTicket={handleNoteTicket}
				/>
			)}
			{showFreshdeskDumpPopup && (
				<FreshdeskDumpPopup
					onClose={closeFreshdeskDumpPopup}
					onDumpLogs={handleDumpLogs}
				/>
			)}

			{contextMenuVisible && (
				<div
					ref={contextMenuRef}
					className="absolute z-10 border rounded-2xl"
					style={{
						top: contextMenuPosition.y,
						left: contextMenuPosition.x,
						minWidth: "200px",
						fontSize: "12px",
					}}
				>
					<ul className="menu bg-base-200 rounded-box">
						<li>
							<button
								type="button"
								onClick={() => {
									closeContextMenu();
									alertDetails();
								}}
								className="context-menu-button"
							>
								See details of the alert
							</button>
						</li>
						<li>
							<button
								type="button"
								onClick={() => {
									closeContextMenu();
									createTicket();
								}}
								className="context-menu-button"
							>
								Create a Freshdesk ticket
							</button>
						</li>
						<li>
							<button
								type="button"
								onClick={() => {
									closeContextMenu();
									noteTicket();
								}}
								className="context-menu-button"
							>
								Add as a note to ticket
							</button>
						</li>
						<li>
							<button
								type="button"
								onClick={() => {
									closeContextMenu();
									dumpLogs();
								}}
								className="context-menu-button"
							>
								Dump logs to ticket
							</button>
						</li>
						<li>
							<button
								type="button"
								onClick={() => {
									closeContextMenu();
									viewLogs();
									toggleTerminalVisibility();
								}}
								className="context-menu-button"
							>
								View pod logs
							</button>
						</li>
						<li>
							<button
								type="button"
								onClick={() => {
									closeContextMenu();
									shellPod();
								}}
								className="context-menu-button"
							>
								Shell into the pod
							</button>
						</li>
						<li>
							<button
								type="button"
								onClick={() => {
									closeContextMenu();
									restartPod();
								}}
								className="context-menu-button"
							>
								Restart the pod
							</button>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
}

export default App;
